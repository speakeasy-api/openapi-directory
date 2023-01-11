package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PutResolverRulePolicyRequest {
    @JsonProperty("Arn")
    public String arn;
    public PutResolverRulePolicyRequest withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonProperty("ResolverRulePolicy")
    public String resolverRulePolicy;
    public PutResolverRulePolicyRequest withResolverRulePolicy(String resolverRulePolicy) {
        this.resolverRulePolicy = resolverRulePolicy;
        return this;
    }
}