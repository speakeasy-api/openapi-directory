package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DeleteVirtualNodeOutput
 * <zonbook></zonbook><xhtml></xhtml>
**/
public class DeleteVirtualNodeOutput {
    @JsonProperty("virtualNode")
    public VirtualNodeData virtualNode;
    public DeleteVirtualNodeOutput withVirtualNode(VirtualNodeData virtualNode) {
        this.virtualNode = virtualNode;
        return this;
    }
}