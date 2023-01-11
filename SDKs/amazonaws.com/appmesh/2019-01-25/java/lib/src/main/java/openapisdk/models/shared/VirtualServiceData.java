package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * VirtualServiceData
 * An object that represents a virtual service returned by a describe operation.
**/
public class VirtualServiceData {
    @JsonProperty("meshName")
    public String meshName;
    public VirtualServiceData withMeshName(String meshName) {
        this.meshName = meshName;
        return this;
    }
    @JsonProperty("metadata")
    public ResourceMetadata metadata;
    public VirtualServiceData withMetadata(ResourceMetadata metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonProperty("spec")
    public VirtualServiceSpec spec;
    public VirtualServiceData withSpec(VirtualServiceSpec spec) {
        this.spec = spec;
        return this;
    }
    @JsonProperty("status")
    public VirtualServiceStatus status;
    public VirtualServiceData withStatus(VirtualServiceStatus status) {
        this.status = status;
        return this;
    }
    @JsonProperty("virtualServiceName")
    public String virtualServiceName;
    public VirtualServiceData withVirtualServiceName(String virtualServiceName) {
        this.virtualServiceName = virtualServiceName;
        return this;
    }
}