package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DescribeVirtualNodeOutput
 * <zonbook></zonbook><xhtml></xhtml>
**/
public class DescribeVirtualNodeOutput {
    @JsonProperty("virtualNode")
    public VirtualNodeData virtualNode;
    public DescribeVirtualNodeOutput withVirtualNode(VirtualNodeData virtualNode) {
        this.virtualNode = virtualNode;
        return this;
    }
}