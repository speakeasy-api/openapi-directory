package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * NodeDetails
 * An object representing the details of a multi-node parallel job node.
**/
public class NodeDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isMainNode")
    public Boolean isMainNode;
    public NodeDetails withIsMainNode(Boolean isMainNode) {
        this.isMainNode = isMainNode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nodeIndex")
    public Long nodeIndex;
    public NodeDetails withNodeIndex(Long nodeIndex) {
        this.nodeIndex = nodeIndex;
        return this;
    }
}