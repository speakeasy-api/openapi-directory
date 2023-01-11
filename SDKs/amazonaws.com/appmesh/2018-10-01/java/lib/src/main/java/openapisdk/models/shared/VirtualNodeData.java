package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VirtualNodeData
 * An object representing a virtual node returned by a describe operation.
**/
public class VirtualNodeData {
    @JsonProperty("meshName")
    public String meshName;
    public VirtualNodeData withMeshName(String meshName) {
        this.meshName = meshName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadata")
    public ResourceMetadata metadata;
    public VirtualNodeData withMetadata(ResourceMetadata metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("spec")
    public VirtualNodeSpec spec;
    public VirtualNodeData withSpec(VirtualNodeSpec spec) {
        this.spec = spec;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public VirtualNodeStatus status;
    public VirtualNodeData withStatus(VirtualNodeStatus status) {
        this.status = status;
        return this;
    }
    @JsonProperty("virtualNodeName")
    public String virtualNodeName;
    public VirtualNodeData withVirtualNodeName(String virtualNodeName) {
        this.virtualNodeName = virtualNodeName;
        return this;
    }
}