package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AssociateResolverRuleRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public AssociateResolverRuleRequest withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("ResolverRuleId")
    public String resolverRuleId;
    public AssociateResolverRuleRequest withResolverRuleId(String resolverRuleId) {
        this.resolverRuleId = resolverRuleId;
        return this;
    }
    @JsonProperty("VPCId")
    public String vpcId;
    public AssociateResolverRuleRequest withVpcId(String vpcId) {
        this.vpcId = vpcId;
        return this;
    }
}