package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeDestinationsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DestinationNamePrefix")
    public String destinationNamePrefix;
    public DescribeDestinationsRequest withDestinationNamePrefix(String destinationNamePrefix) {
        this.destinationNamePrefix = destinationNamePrefix;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("limit")
    public Long limit;
    public DescribeDestinationsRequest withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public DescribeDestinationsRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}