package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ReturnPolicyResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("returnPolicies")
    public ReturnPolicy[] returnPolicies;
    public ReturnPolicyResponse withReturnPolicies(ReturnPolicy[] returnPolicies) {
        this.returnPolicies = returnPolicies;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("warnings")
    public Error[] warnings;
    public ReturnPolicyResponse withWarnings(Error[] warnings) {
        this.warnings = warnings;
        return this;
    }
}