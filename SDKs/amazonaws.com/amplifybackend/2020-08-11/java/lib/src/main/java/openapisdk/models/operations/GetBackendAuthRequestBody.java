package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetBackendAuthRequestBody {
    @JsonProperty("resourceName")
    public String resourceName;
    public GetBackendAuthRequestBody withResourceName(String resourceName) {
        this.resourceName = resourceName;
        return this;
    }
}