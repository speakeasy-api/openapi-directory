package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * StopGameSessionPlacementInput
 * Represents the input for a request operation.
**/
public class StopGameSessionPlacementInput {
    @JsonProperty("PlacementId")
    public String placementId;
    public StopGameSessionPlacementInput withPlacementId(String placementId) {
        this.placementId = placementId;
        return this;
    }
}