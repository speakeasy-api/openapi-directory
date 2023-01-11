package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeSubscriptionFiltersRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filterNamePrefix")
    public String filterNamePrefix;
    public DescribeSubscriptionFiltersRequest withFilterNamePrefix(String filterNamePrefix) {
        this.filterNamePrefix = filterNamePrefix;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("limit")
    public Long limit;
    public DescribeSubscriptionFiltersRequest withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @JsonProperty("logGroupName")
    public String logGroupName;
    public DescribeSubscriptionFiltersRequest withLogGroupName(String logGroupName) {
        this.logGroupName = logGroupName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public DescribeSubscriptionFiltersRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}