package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GenerateBackendApiModelsRequestBody {
    @JsonProperty("resourceName")
    public String resourceName;
    public GenerateBackendApiModelsRequestBody withResourceName(String resourceName) {
        this.resourceName = resourceName;
        return this;
    }
}