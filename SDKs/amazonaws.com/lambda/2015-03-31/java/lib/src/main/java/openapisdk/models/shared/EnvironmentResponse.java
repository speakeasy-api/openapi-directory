package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EnvironmentResponse
 * The results of an operation to update or read environment variables. If the operation is successful, the response contains the environment variables. If it failed, the response contains details about the error.
**/
public class EnvironmentResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Error")
    public EnvironmentError error;
    public EnvironmentResponse withError(EnvironmentError error) {
        this.error = error;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Variables")
    public java.util.Map<String, String> variables;
    public EnvironmentResponse withVariables(java.util.Map<String, String> variables) {
        this.variables = variables;
        return this;
    }
}