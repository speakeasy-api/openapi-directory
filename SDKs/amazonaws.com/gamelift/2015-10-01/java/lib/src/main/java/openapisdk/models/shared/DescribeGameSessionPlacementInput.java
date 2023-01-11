package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DescribeGameSessionPlacementInput
 * Represents the input for a request operation.
**/
public class DescribeGameSessionPlacementInput {
    @JsonProperty("PlacementId")
    public String placementId;
    public DescribeGameSessionPlacementInput withPlacementId(String placementId) {
        this.placementId = placementId;
        return this;
    }
}