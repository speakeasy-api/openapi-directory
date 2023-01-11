package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class BatchGetResourceConfigRequest {
    @JsonProperty("resourceKeys")
    public ResourceKey[] resourceKeys;
    public BatchGetResourceConfigRequest withResourceKeys(ResourceKey[] resourceKeys) {
        this.resourceKeys = resourceKeys;
        return this;
    }
}