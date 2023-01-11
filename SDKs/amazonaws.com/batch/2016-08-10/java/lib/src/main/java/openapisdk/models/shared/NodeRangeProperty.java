package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * NodeRangeProperty
 * An object representing the properties of the node range for a multi-node parallel job.
**/
public class NodeRangeProperty {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("container")
    public ContainerProperties container;
    public NodeRangeProperty withContainer(ContainerProperties container) {
        this.container = container;
        return this;
    }
    @JsonProperty("targetNodes")
    public String targetNodes;
    public NodeRangeProperty withTargetNodes(String targetNodes) {
        this.targetNodes = targetNodes;
        return this;
    }
}