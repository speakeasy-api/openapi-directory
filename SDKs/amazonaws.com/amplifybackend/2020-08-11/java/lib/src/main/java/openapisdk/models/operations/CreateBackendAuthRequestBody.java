package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateBackendAuthRequestBody {
    @JsonProperty("backendEnvironmentName")
    public String backendEnvironmentName;
    public CreateBackendAuthRequestBody withBackendEnvironmentName(String backendEnvironmentName) {
        this.backendEnvironmentName = backendEnvironmentName;
        return this;
    }
    @JsonProperty("resourceConfig")
    public CreateBackendAuthRequestBodyResourceConfig resourceConfig;
    public CreateBackendAuthRequestBody withResourceConfig(CreateBackendAuthRequestBodyResourceConfig resourceConfig) {
        this.resourceConfig = resourceConfig;
        return this;
    }
    @JsonProperty("resourceName")
    public String resourceName;
    public CreateBackendAuthRequestBody withResourceName(String resourceName) {
        this.resourceName = resourceName;
        return this;
    }
}