package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CreateBackendEnvironmentResult
 *  The result structure for the create backend environment request. 
**/
public class CreateBackendEnvironmentResult {
    @JsonProperty("backendEnvironment")
    public BackendEnvironment backendEnvironment;
    public CreateBackendEnvironmentResult withBackendEnvironment(BackendEnvironment backendEnvironment) {
        this.backendEnvironment = backendEnvironment;
        return this;
    }
}