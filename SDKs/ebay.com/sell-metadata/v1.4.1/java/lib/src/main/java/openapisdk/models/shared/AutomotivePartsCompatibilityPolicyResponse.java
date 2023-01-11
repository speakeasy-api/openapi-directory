package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AutomotivePartsCompatibilityPolicyResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("automotivePartsCompatibilityPolicies")
    public AutomotivePartsCompatibilityPolicy[] automotivePartsCompatibilityPolicies;
    public AutomotivePartsCompatibilityPolicyResponse withAutomotivePartsCompatibilityPolicies(AutomotivePartsCompatibilityPolicy[] automotivePartsCompatibilityPolicies) {
        this.automotivePartsCompatibilityPolicies = automotivePartsCompatibilityPolicies;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("warnings")
    public Error[] warnings;
    public AutomotivePartsCompatibilityPolicyResponse withWarnings(Error[] warnings) {
        this.warnings = warnings;
        return this;
    }
}