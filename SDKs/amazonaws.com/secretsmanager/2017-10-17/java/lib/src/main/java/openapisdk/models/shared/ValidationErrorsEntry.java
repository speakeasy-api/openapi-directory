package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ValidationErrorsEntry
 * Displays errors that occurred during validation of the resource policy.
**/
public class ValidationErrorsEntry {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CheckName")
    public String checkName;
    public ValidationErrorsEntry withCheckName(String checkName) {
        this.checkName = checkName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ErrorMessage")
    public String errorMessage;
    public ValidationErrorsEntry withErrorMessage(String errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
}