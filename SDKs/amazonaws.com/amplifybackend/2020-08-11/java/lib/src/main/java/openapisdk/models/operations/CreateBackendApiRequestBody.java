package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateBackendApiRequestBody {
    @JsonProperty("backendEnvironmentName")
    public String backendEnvironmentName;
    public CreateBackendApiRequestBody withBackendEnvironmentName(String backendEnvironmentName) {
        this.backendEnvironmentName = backendEnvironmentName;
        return this;
    }
    @JsonProperty("resourceConfig")
    public CreateBackendApiRequestBodyResourceConfig resourceConfig;
    public CreateBackendApiRequestBody withResourceConfig(CreateBackendApiRequestBodyResourceConfig resourceConfig) {
        this.resourceConfig = resourceConfig;
        return this;
    }
    @JsonProperty("resourceName")
    public String resourceName;
    public CreateBackendApiRequestBody withResourceName(String resourceName) {
        this.resourceName = resourceName;
        return this;
    }
}