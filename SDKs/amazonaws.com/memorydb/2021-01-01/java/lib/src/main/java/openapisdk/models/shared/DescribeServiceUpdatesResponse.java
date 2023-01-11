package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeServiceUpdatesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public DescribeServiceUpdatesResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ServiceUpdates")
    public ServiceUpdate[] serviceUpdates;
    public DescribeServiceUpdatesResponse withServiceUpdates(ServiceUpdate[] serviceUpdates) {
        this.serviceUpdates = serviceUpdates;
        return this;
    }
}