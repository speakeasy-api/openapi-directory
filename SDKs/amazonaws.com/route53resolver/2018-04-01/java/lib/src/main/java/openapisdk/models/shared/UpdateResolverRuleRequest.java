package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateResolverRuleRequest {
    @JsonProperty("Config")
    public ResolverRuleConfig config;
    public UpdateResolverRuleRequest withConfig(ResolverRuleConfig config) {
        this.config = config;
        return this;
    }
    @JsonProperty("ResolverRuleId")
    public String resolverRuleId;
    public UpdateResolverRuleRequest withResolverRuleId(String resolverRuleId) {
        this.resolverRuleId = resolverRuleId;
        return this;
    }
}