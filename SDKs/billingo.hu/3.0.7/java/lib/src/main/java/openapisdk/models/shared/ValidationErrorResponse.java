package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ValidationErrorResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errors")
    public ValidationError[] errors;
    public ValidationErrorResponse withErrors(ValidationError[] errors) {
        this.errors = errors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public ValidationErrorResponse withMessage(String message) {
        this.message = message;
        return this;
    }
}