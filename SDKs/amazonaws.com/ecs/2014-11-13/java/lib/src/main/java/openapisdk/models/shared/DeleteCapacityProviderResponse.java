package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeleteCapacityProviderResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("capacityProvider")
    public CapacityProvider capacityProvider;
    public DeleteCapacityProviderResponse withCapacityProvider(CapacityProvider capacityProvider) {
        this.capacityProvider = capacityProvider;
        return this;
    }
}