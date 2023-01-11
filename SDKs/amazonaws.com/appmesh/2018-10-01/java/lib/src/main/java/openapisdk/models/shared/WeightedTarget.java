package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * WeightedTarget
 * An object representing a target and its relative weight. Traffic is distributed across
 *          targets according to their relative weight. For example, a weighted target with a relative
 *          weight of 50 receives five times as much traffic as one with a relative weight of
 *          10.
**/
public class WeightedTarget {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("virtualNode")
    public String virtualNode;
    public WeightedTarget withVirtualNode(String virtualNode) {
        this.virtualNode = virtualNode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("weight")
    public Long weight;
    public WeightedTarget withWeight(Long weight) {
        this.weight = weight;
        return this;
    }
}