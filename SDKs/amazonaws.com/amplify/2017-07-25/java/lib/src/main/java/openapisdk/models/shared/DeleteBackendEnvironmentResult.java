package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DeleteBackendEnvironmentResult
 *  The result structure of the delete backend environment result. 
**/
public class DeleteBackendEnvironmentResult {
    @JsonProperty("backendEnvironment")
    public BackendEnvironment backendEnvironment;
    public DeleteBackendEnvironmentResult withBackendEnvironment(BackendEnvironment backendEnvironment) {
        this.backendEnvironment = backendEnvironment;
        return this;
    }
}