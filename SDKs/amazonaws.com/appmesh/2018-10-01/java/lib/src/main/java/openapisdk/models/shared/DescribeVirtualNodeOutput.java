package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeVirtualNodeOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("virtualNode")
    public VirtualNodeData virtualNode;
    public DescribeVirtualNodeOutput withVirtualNode(VirtualNodeData virtualNode) {
        this.virtualNode = virtualNode;
        return this;
    }
}