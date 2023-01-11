package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeDestinationsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destinations")
    public Destination[] destinations;
    public DescribeDestinationsResponse withDestinations(Destination[] destinations) {
        this.destinations = destinations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public DescribeDestinationsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}