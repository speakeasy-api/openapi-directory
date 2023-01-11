package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * MeshData
 * An object that represents a service mesh returned by a describe operation.
**/
public class MeshData {
    @JsonProperty("meshName")
    public String meshName;
    public MeshData withMeshName(String meshName) {
        this.meshName = meshName;
        return this;
    }
    @JsonProperty("metadata")
    public ResourceMetadata metadata;
    public MeshData withMetadata(ResourceMetadata metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonProperty("spec")
    public MeshSpec spec;
    public MeshData withSpec(MeshSpec spec) {
        this.spec = spec;
        return this;
    }
    @JsonProperty("status")
    public MeshStatus status;
    public MeshData withStatus(MeshStatus status) {
        this.status = status;
        return this;
    }
}