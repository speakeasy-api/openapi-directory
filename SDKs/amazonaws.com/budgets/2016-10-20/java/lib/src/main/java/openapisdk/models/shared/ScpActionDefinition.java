package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ScpActionDefinition
 *  The service control policies (SCP) action definition details. 
**/
public class ScpActionDefinition {
    @JsonProperty("PolicyId")
    public String policyId;
    public ScpActionDefinition withPolicyId(String policyId) {
        this.policyId = policyId;
        return this;
    }
    @JsonProperty("TargetIds")
    public String[] targetIds;
    public ScpActionDefinition withTargetIds(String[] targetIds) {
        this.targetIds = targetIds;
        return this;
    }
}