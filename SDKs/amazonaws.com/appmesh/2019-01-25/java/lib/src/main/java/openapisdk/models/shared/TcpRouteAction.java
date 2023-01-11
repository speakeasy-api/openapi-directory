package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * TcpRouteAction
 * An object that represents the action to take if a match is determined.
**/
public class TcpRouteAction {
    @JsonProperty("weightedTargets")
    public WeightedTarget[] weightedTargets;
    public TcpRouteAction withWeightedTargets(WeightedTarget[] weightedTargets) {
        this.weightedTargets = weightedTargets;
        return this;
    }
}