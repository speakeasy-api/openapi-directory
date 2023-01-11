package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeJobsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("items")
    public Job[] items;
    public DescribeJobsResponse withItems(Job[] items) {
        this.items = items;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public DescribeJobsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}