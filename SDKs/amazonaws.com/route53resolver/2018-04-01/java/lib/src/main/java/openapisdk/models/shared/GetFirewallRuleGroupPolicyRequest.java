package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetFirewallRuleGroupPolicyRequest {
    @JsonProperty("Arn")
    public String arn;
    public GetFirewallRuleGroupPolicyRequest withArn(String arn) {
        this.arn = arn;
        return this;
    }
}