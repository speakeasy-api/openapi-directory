package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RegisterJobDefinitionRequestBodyNodeProperties
 * An object representing the node properties of a multi-node parallel job.
**/
public class RegisterJobDefinitionRequestBodyNodeProperties {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mainNode")
    public Long mainNode;
    public RegisterJobDefinitionRequestBodyNodeProperties withMainNode(Long mainNode) {
        this.mainNode = mainNode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nodeRangeProperties")
    public openapisdk.models.shared.NodeRangeProperty[] nodeRangeProperties;
    public RegisterJobDefinitionRequestBodyNodeProperties withNodeRangeProperties(openapisdk.models.shared.NodeRangeProperty[] nodeRangeProperties) {
        this.nodeRangeProperties = nodeRangeProperties;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("numNodes")
    public Long numNodes;
    public RegisterJobDefinitionRequestBodyNodeProperties withNumNodes(Long numNodes) {
        this.numNodes = numNodes;
        return this;
    }
}