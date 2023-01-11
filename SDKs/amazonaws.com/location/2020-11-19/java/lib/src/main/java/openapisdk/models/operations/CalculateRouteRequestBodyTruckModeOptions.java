package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CalculateRouteRequestBodyTruckModeOptions
 * Contains details about additional route preferences for requests that specify <code>TravelMode</code> as <code>Truck</code>.
**/
public class CalculateRouteRequestBodyTruckModeOptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AvoidFerries")
    public Boolean avoidFerries;
    public CalculateRouteRequestBodyTruckModeOptions withAvoidFerries(Boolean avoidFerries) {
        this.avoidFerries = avoidFerries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AvoidTolls")
    public Boolean avoidTolls;
    public CalculateRouteRequestBodyTruckModeOptions withAvoidTolls(Boolean avoidTolls) {
        this.avoidTolls = avoidTolls;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Dimensions")
    public openapisdk.models.shared.TruckDimensions dimensions;
    public CalculateRouteRequestBodyTruckModeOptions withDimensions(openapisdk.models.shared.TruckDimensions dimensions) {
        this.dimensions = dimensions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Weight")
    public openapisdk.models.shared.TruckWeight weight;
    public CalculateRouteRequestBodyTruckModeOptions withWeight(openapisdk.models.shared.TruckWeight weight) {
        this.weight = weight;
        return this;
    }
}