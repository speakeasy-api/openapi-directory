package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ExecutionError
 * Specifies the error message and type, for an error that occurs during the execution of the workflow.
**/
public class ExecutionError {
    @JsonProperty("Message")
    public String message;
    public ExecutionError withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonProperty("Type")
    public ExecutionErrorTypeEnum type;
    public ExecutionError withType(ExecutionErrorTypeEnum type) {
        this.type = type;
        return this;
    }
}