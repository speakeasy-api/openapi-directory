package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MeshData
 * An object representing a service mesh returned by a describe operation.
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
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public MeshStatus status;
    public MeshData withStatus(MeshStatus status) {
        this.status = status;
        return this;
    }
}