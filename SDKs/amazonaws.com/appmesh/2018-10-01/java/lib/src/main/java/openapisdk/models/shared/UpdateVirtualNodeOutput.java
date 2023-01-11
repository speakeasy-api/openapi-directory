package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateVirtualNodeOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("virtualNode")
    public VirtualNodeData virtualNode;
    public UpdateVirtualNodeOutput withVirtualNode(VirtualNodeData virtualNode) {
        this.virtualNode = virtualNode;
        return this;
    }
}