package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetRegistryInput {
    @JsonProperty("RegistryId")
    public RegistryId registryId;
    public GetRegistryInput withRegistryId(RegistryId registryId) {
        this.registryId = registryId;
        return this;
    }
}