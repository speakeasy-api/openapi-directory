package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LifecyclePolicySummary
 * Summary information about a lifecycle policy.
**/
public class LifecyclePolicySummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public LifecyclePolicySummary withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PolicyId")
    public String policyId;
    public LifecyclePolicySummary withPolicyId(String policyId) {
        this.policyId = policyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PolicyType")
    public PolicyTypeValuesEnum policyType;
    public LifecyclePolicySummary withPolicyType(PolicyTypeValuesEnum policyType) {
        this.policyType = policyType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("State")
    public GettablePolicyStateValuesEnum state;
    public LifecyclePolicySummary withState(GettablePolicyStateValuesEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public java.util.Map<String, String> tags;
    public LifecyclePolicySummary withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
}