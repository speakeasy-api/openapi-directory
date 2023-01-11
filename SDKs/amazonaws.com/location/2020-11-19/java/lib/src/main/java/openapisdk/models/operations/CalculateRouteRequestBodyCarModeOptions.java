package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CalculateRouteRequestBodyCarModeOptions
 * Contains details about additional route preferences for requests that specify <code>TravelMode</code> as <code>Car</code>.
**/
public class CalculateRouteRequestBodyCarModeOptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AvoidFerries")
    public Boolean avoidFerries;
    public CalculateRouteRequestBodyCarModeOptions withAvoidFerries(Boolean avoidFerries) {
        this.avoidFerries = avoidFerries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AvoidTolls")
    public Boolean avoidTolls;
    public CalculateRouteRequestBodyCarModeOptions withAvoidTolls(Boolean avoidTolls) {
        this.avoidTolls = avoidTolls;
        return this;
    }
}