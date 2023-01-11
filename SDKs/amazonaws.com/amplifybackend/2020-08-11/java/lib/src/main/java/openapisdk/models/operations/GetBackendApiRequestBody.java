package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetBackendApiRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceConfig")
    public GetBackendApiRequestBodyResourceConfig resourceConfig;
    public GetBackendApiRequestBody withResourceConfig(GetBackendApiRequestBodyResourceConfig resourceConfig) {
        this.resourceConfig = resourceConfig;
        return this;
    }
    @JsonProperty("resourceName")
    public String resourceName;
    public GetBackendApiRequestBody withResourceName(String resourceName) {
        this.resourceName = resourceName;
        return this;
    }
}