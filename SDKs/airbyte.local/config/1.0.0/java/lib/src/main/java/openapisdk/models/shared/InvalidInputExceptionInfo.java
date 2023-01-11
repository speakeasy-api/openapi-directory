package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class InvalidInputExceptionInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exceptionClassName")
    public String exceptionClassName;
    public InvalidInputExceptionInfo withExceptionClassName(String exceptionClassName) {
        this.exceptionClassName = exceptionClassName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exceptionStack")
    public String[] exceptionStack;
    public InvalidInputExceptionInfo withExceptionStack(String[] exceptionStack) {
        this.exceptionStack = exceptionStack;
        return this;
    }
    @JsonProperty("message")
    public String message;
    public InvalidInputExceptionInfo withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonProperty("validationErrors")
    public InvalidInputProperty[] validationErrors;
    public InvalidInputExceptionInfo withValidationErrors(InvalidInputProperty[] validationErrors) {
        this.validationErrors = validationErrors;
        return this;
    }
}