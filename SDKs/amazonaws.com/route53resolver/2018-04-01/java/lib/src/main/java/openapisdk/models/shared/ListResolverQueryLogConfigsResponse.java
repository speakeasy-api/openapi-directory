package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListResolverQueryLogConfigsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListResolverQueryLogConfigsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResolverQueryLogConfigs")
    public ResolverQueryLogConfig[] resolverQueryLogConfigs;
    public ListResolverQueryLogConfigsResponse withResolverQueryLogConfigs(ResolverQueryLogConfig[] resolverQueryLogConfigs) {
        this.resolverQueryLogConfigs = resolverQueryLogConfigs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TotalCount")
    public Long totalCount;
    public ListResolverQueryLogConfigsResponse withTotalCount(Long totalCount) {
        this.totalCount = totalCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TotalFilteredCount")
    public Long totalFilteredCount;
    public ListResolverQueryLogConfigsResponse withTotalFilteredCount(Long totalFilteredCount) {
        this.totalFilteredCount = totalFilteredCount;
        return this;
    }
}