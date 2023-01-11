package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetBackendApiResponseResourceConfigDefaultAuthType
 * The default authentication type for interacting with the configured data models in your Amplify project.
**/
public class GetBackendApiResponseResourceConfigDefaultAuthType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Mode")
    public java.util.Map<String, Object> mode;
    public GetBackendApiResponseResourceConfigDefaultAuthType withMode(java.util.Map<String, Object> mode) {
        this.mode = mode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Settings")
    public GetBackendApiResponseResourceConfigDefaultAuthTypeSettings settings;
    public GetBackendApiResponseResourceConfigDefaultAuthType withSettings(GetBackendApiResponseResourceConfigDefaultAuthTypeSettings settings) {
        this.settings = settings;
        return this;
    }
}