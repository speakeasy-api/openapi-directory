package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateBackendAuthRequestBody {
    @JsonProperty("resourceConfig")
    public UpdateBackendAuthRequestBodyResourceConfig resourceConfig;
    public UpdateBackendAuthRequestBody withResourceConfig(UpdateBackendAuthRequestBodyResourceConfig resourceConfig) {
        this.resourceConfig = resourceConfig;
        return this;
    }
    @JsonProperty("resourceName")
    public String resourceName;
    public UpdateBackendAuthRequestBody withResourceName(String resourceName) {
        this.resourceName = resourceName;
        return this;
    }
}