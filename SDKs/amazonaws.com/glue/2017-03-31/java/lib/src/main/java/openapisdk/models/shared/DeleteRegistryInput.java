package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteRegistryInput {
    @JsonProperty("RegistryId")
    public RegistryId registryId;
    public DeleteRegistryInput withRegistryId(RegistryId registryId) {
        this.registryId = registryId;
        return this;
    }
}