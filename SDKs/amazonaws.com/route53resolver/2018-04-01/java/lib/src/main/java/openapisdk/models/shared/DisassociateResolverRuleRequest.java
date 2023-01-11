package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DisassociateResolverRuleRequest {
    @JsonProperty("ResolverRuleId")
    public String resolverRuleId;
    public DisassociateResolverRuleRequest withResolverRuleId(String resolverRuleId) {
        this.resolverRuleId = resolverRuleId;
        return this;
    }
    @JsonProperty("VPCId")
    public String vpcId;
    public DisassociateResolverRuleRequest withVpcId(String vpcId) {
        this.vpcId = vpcId;
        return this;
    }
}