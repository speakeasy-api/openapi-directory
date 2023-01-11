package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListResolverQueryLogConfigAssociationsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListResolverQueryLogConfigAssociationsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResolverQueryLogConfigAssociations")
    public ResolverQueryLogConfigAssociation[] resolverQueryLogConfigAssociations;
    public ListResolverQueryLogConfigAssociationsResponse withResolverQueryLogConfigAssociations(ResolverQueryLogConfigAssociation[] resolverQueryLogConfigAssociations) {
        this.resolverQueryLogConfigAssociations = resolverQueryLogConfigAssociations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TotalCount")
    public Long totalCount;
    public ListResolverQueryLogConfigAssociationsResponse withTotalCount(Long totalCount) {
        this.totalCount = totalCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TotalFilteredCount")
    public Long totalFilteredCount;
    public ListResolverQueryLogConfigAssociationsResponse withTotalFilteredCount(Long totalFilteredCount) {
        this.totalFilteredCount = totalFilteredCount;
        return this;
    }
}