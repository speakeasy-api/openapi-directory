package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CalculateRouteResponse
 * Returns the result of the route calculation. Metadata includes legs and route summary.
**/
public class CalculateRouteResponse {
    @JsonProperty("Legs")
    public Leg[] legs;
    public CalculateRouteResponse withLegs(Leg[] legs) {
        this.legs = legs;
        return this;
    }
    @JsonProperty("Summary")
    public CalculateRouteSummary summary;
    public CalculateRouteResponse withSummary(CalculateRouteSummary summary) {
        this.summary = summary;
        return this;
    }
}