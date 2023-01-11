package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateBackendApiRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceConfig")
    public UpdateBackendApiRequestBodyResourceConfig resourceConfig;
    public UpdateBackendApiRequestBody withResourceConfig(UpdateBackendApiRequestBodyResourceConfig resourceConfig) {
        this.resourceConfig = resourceConfig;
        return this;
    }
    @JsonProperty("resourceName")
    public String resourceName;
    public UpdateBackendApiRequestBody withResourceName(String resourceName) {
        this.resourceName = resourceName;
        return this;
    }
}