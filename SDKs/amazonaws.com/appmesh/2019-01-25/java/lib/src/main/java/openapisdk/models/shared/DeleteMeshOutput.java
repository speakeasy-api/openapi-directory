package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DeleteMeshOutput
 * <zonbook></zonbook><xhtml></xhtml>
**/
public class DeleteMeshOutput {
    @JsonProperty("mesh")
    public MeshData mesh;
    public DeleteMeshOutput withMesh(MeshData mesh) {
        this.mesh = mesh;
        return this;
    }
}