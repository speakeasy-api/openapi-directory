package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * UpdateVirtualNodeOutput
 * <zonbook></zonbook><xhtml></xhtml>
**/
public class UpdateVirtualNodeOutput {
    @JsonProperty("virtualNode")
    public VirtualNodeData virtualNode;
    public UpdateVirtualNodeOutput withVirtualNode(VirtualNodeData virtualNode) {
        this.virtualNode = virtualNode;
        return this;
    }
}