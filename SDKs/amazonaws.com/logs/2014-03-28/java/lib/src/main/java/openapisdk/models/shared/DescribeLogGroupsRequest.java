package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeLogGroupsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("limit")
    public Long limit;
    public DescribeLogGroupsRequest withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("logGroupNamePrefix")
    public String logGroupNamePrefix;
    public DescribeLogGroupsRequest withLogGroupNamePrefix(String logGroupNamePrefix) {
        this.logGroupNamePrefix = logGroupNamePrefix;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public DescribeLogGroupsRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}