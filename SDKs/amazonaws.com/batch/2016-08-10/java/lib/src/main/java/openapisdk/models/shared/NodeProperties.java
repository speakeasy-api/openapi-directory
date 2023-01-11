package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * NodeProperties
 * An object representing the node properties of a multi-node parallel job.
**/
public class NodeProperties {
    @JsonProperty("mainNode")
    public Long mainNode;
    public NodeProperties withMainNode(Long mainNode) {
        this.mainNode = mainNode;
        return this;
    }
    @JsonProperty("nodeRangeProperties")
    public NodeRangeProperty[] nodeRangeProperties;
    public NodeProperties withNodeRangeProperties(NodeRangeProperty[] nodeRangeProperties) {
        this.nodeRangeProperties = nodeRangeProperties;
        return this;
    }
    @JsonProperty("numNodes")
    public Long numNodes;
    public NodeProperties withNumNodes(Long numNodes) {
        this.numNodes = numNodes;
        return this;
    }
}