package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetBackendEnvironmentResult
 *  The result structure for the get backend environment result. 
**/
public class GetBackendEnvironmentResult {
    @JsonProperty("backendEnvironment")
    public BackendEnvironment backendEnvironment;
    public GetBackendEnvironmentResult withBackendEnvironment(BackendEnvironment backendEnvironment) {
        this.backendEnvironment = backendEnvironment;
        return this;
    }
}