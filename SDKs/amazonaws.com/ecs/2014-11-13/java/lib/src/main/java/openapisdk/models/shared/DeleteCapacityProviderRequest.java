package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteCapacityProviderRequest {
    @JsonProperty("capacityProvider")
    public String capacityProvider;
    public DeleteCapacityProviderRequest withCapacityProvider(String capacityProvider) {
        this.capacityProvider = capacityProvider;
        return this;
    }
}