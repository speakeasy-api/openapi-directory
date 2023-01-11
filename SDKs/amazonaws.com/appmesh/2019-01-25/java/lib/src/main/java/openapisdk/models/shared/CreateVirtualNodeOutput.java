package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CreateVirtualNodeOutput
 * <zonbook></zonbook><xhtml></xhtml>
**/
public class CreateVirtualNodeOutput {
    @JsonProperty("virtualNode")
    public VirtualNodeData virtualNode;
    public CreateVirtualNodeOutput withVirtualNode(VirtualNodeData virtualNode) {
        this.virtualNode = virtualNode;
        return this;
    }
}