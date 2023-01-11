package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * WeightedTarget
 * An object that represents a target and its relative weight. Traffic is distributed across targets according to their relative weight. For example, a weighted target with a relative weight of 50 receives five times as much traffic as one with a relative weight of 10. The total weight for all targets combined must be less than or equal to 100.
**/
public class WeightedTarget {
    @JsonProperty("virtualNode")
    public String virtualNode;
    public WeightedTarget withVirtualNode(String virtualNode) {
        this.virtualNode = virtualNode;
        return this;
    }
    @JsonProperty("weight")
    public Long weight;
    public WeightedTarget withWeight(Long weight) {
        this.weight = weight;
        return this;
    }
}