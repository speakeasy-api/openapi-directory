package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribePlacementResponse {
    @JsonProperty("placement")
    public PlacementDescription placement;
    public DescribePlacementResponse withPlacement(PlacementDescription placement) {
        this.placement = placement;
        return this;
    }
}