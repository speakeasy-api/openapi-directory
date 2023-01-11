package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ValidateResourcePolicyResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PolicyValidationPassed")
    public Boolean policyValidationPassed;
    public ValidateResourcePolicyResponse withPolicyValidationPassed(Boolean policyValidationPassed) {
        this.policyValidationPassed = policyValidationPassed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ValidationErrors")
    public ValidationErrorsEntry[] validationErrors;
    public ValidateResourcePolicyResponse withValidationErrors(ValidationErrorsEntry[] validationErrors) {
        this.validationErrors = validationErrors;
        return this;
    }
}