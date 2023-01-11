package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeleteVirtualNodeOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("virtualNode")
    public VirtualNodeData virtualNode;
    public DeleteVirtualNodeOutput withVirtualNode(VirtualNodeData virtualNode) {
        this.virtualNode = virtualNode;
        return this;
    }
}