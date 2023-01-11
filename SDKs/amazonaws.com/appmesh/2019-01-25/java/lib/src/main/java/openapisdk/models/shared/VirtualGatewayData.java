package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * VirtualGatewayData
 * An object that represents a virtual gateway returned by a describe operation.
**/
public class VirtualGatewayData {
    @JsonProperty("meshName")
    public String meshName;
    public VirtualGatewayData withMeshName(String meshName) {
        this.meshName = meshName;
        return this;
    }
    @JsonProperty("metadata")
    public ResourceMetadata metadata;
    public VirtualGatewayData withMetadata(ResourceMetadata metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonProperty("spec")
    public VirtualGatewaySpec spec;
    public VirtualGatewayData withSpec(VirtualGatewaySpec spec) {
        this.spec = spec;
        return this;
    }
    @JsonProperty("status")
    public VirtualGatewayStatus status;
    public VirtualGatewayData withStatus(VirtualGatewayStatus status) {
        this.status = status;
        return this;
    }
    @JsonProperty("virtualGatewayName")
    public String virtualGatewayName;
    public VirtualGatewayData withVirtualGatewayName(String virtualGatewayName) {
        this.virtualGatewayName = virtualGatewayName;
        return this;
    }
}