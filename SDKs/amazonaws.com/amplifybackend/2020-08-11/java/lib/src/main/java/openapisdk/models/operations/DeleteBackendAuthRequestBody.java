package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteBackendAuthRequestBody {
    @JsonProperty("resourceName")
    public String resourceName;
    public DeleteBackendAuthRequestBody withResourceName(String resourceName) {
        this.resourceName = resourceName;
        return this;
    }
}