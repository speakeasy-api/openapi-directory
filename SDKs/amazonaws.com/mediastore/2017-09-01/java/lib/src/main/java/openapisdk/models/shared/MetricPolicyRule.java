package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * MetricPolicyRule
 * A setting that enables metrics at the object level. Each rule contains an object group and an object group name. If the policy includes the MetricPolicyRules parameter, you must include at least one rule. Each metric policy can include up to five rules by default. You can also <a href="https://console.aws.amazon.com/servicequotas/home?region=us-east-1#!/services/mediastore/quotas">request a quota increase</a> to allow up to 300 rules per policy.
**/
public class MetricPolicyRule {
    @JsonProperty("ObjectGroup")
    public String objectGroup;
    public MetricPolicyRule withObjectGroup(String objectGroup) {
        this.objectGroup = objectGroup;
        return this;
    }
    @JsonProperty("ObjectGroupName")
    public String objectGroupName;
    public MetricPolicyRule withObjectGroupName(String objectGroupName) {
        this.objectGroupName = objectGroupName;
        return this;
    }
}