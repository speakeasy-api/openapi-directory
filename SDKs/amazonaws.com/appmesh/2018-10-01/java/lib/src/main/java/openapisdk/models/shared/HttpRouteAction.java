package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * HttpRouteAction
 * An object representing the traffic distribution requirements for matched HTTP
 *          requests.
**/
public class HttpRouteAction {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("weightedTargets")
    public WeightedTarget[] weightedTargets;
    public HttpRouteAction withWeightedTargets(WeightedTarget[] weightedTargets) {
        this.weightedTargets = weightedTargets;
        return this;
    }
}