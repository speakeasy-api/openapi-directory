package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * UpdateMeshOutput
 * <zonbook></zonbook><xhtml></xhtml>
**/
public class UpdateMeshOutput {
    @JsonProperty("mesh")
    public MeshData mesh;
    public UpdateMeshOutput withMesh(MeshData mesh) {
        this.mesh = mesh;
        return this;
    }
}