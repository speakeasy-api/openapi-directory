package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DeleteBackendApiRequestBodyResourceConfigDefaultAuthType
 * The default authentication type for interacting with the configured data models in your Amplify project.
**/
public class DeleteBackendApiRequestBodyResourceConfigDefaultAuthType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Mode")
    public java.util.Map<String, Object> mode;
    public DeleteBackendApiRequestBodyResourceConfigDefaultAuthType withMode(java.util.Map<String, Object> mode) {
        this.mode = mode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Settings")
    public DeleteBackendApiRequestBodyResourceConfigDefaultAuthTypeSettings settings;
    public DeleteBackendApiRequestBodyResourceConfigDefaultAuthType withSettings(DeleteBackendApiRequestBodyResourceConfigDefaultAuthTypeSettings settings) {
        this.settings = settings;
        return this;
    }
}