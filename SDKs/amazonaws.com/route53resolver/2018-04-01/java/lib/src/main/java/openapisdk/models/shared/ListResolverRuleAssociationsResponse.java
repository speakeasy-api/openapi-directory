package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListResolverRuleAssociationsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxResults")
    public Long maxResults;
    public ListResolverRuleAssociationsResponse withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListResolverRuleAssociationsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResolverRuleAssociations")
    public ResolverRuleAssociation[] resolverRuleAssociations;
    public ListResolverRuleAssociationsResponse withResolverRuleAssociations(ResolverRuleAssociation[] resolverRuleAssociations) {
        this.resolverRuleAssociations = resolverRuleAssociations;
        return this;
    }
}