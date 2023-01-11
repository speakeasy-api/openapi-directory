package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IspPlacement
 * An object that describes how email sent during the predictive inbox placement test was handled by a certain email provider.
**/
public class IspPlacement {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IspName")
    public String ispName;
    public IspPlacement withIspName(String ispName) {
        this.ispName = ispName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PlacementStatistics")
    public PlacementStatistics placementStatistics;
    public IspPlacement withPlacementStatistics(PlacementStatistics placementStatistics) {
        this.placementStatistics = placementStatistics;
        return this;
    }
}