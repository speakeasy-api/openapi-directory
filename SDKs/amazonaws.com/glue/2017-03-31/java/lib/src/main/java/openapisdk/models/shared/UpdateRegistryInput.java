package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateRegistryInput {
    @JsonProperty("Description")
    public String description;
    public UpdateRegistryInput withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("RegistryId")
    public RegistryId registryId;
    public UpdateRegistryInput withRegistryId(RegistryId registryId) {
        this.registryId = registryId;
        return this;
    }
}