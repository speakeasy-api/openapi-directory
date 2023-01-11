package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeJobLogItemsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("items")
    public JobLog[] items;
    public DescribeJobLogItemsResponse withItems(JobLog[] items) {
        this.items = items;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public DescribeJobLogItemsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}