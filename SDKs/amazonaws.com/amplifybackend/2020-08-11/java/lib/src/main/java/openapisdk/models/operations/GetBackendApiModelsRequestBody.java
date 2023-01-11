package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetBackendApiModelsRequestBody {
    @JsonProperty("resourceName")
    public String resourceName;
    public GetBackendApiModelsRequestBody withResourceName(String resourceName) {
        this.resourceName = resourceName;
        return this;
    }
}