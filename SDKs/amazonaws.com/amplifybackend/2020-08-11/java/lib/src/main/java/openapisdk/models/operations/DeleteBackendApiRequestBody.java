package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeleteBackendApiRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceConfig")
    public DeleteBackendApiRequestBodyResourceConfig resourceConfig;
    public DeleteBackendApiRequestBody withResourceConfig(DeleteBackendApiRequestBodyResourceConfig resourceConfig) {
        this.resourceConfig = resourceConfig;
        return this;
    }
    @JsonProperty("resourceName")
    public String resourceName;
    public DeleteBackendApiRequestBody withResourceName(String resourceName) {
        this.resourceName = resourceName;
        return this;
    }
}