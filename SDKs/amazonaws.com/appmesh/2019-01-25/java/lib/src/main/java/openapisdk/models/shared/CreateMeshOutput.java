package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CreateMeshOutput
 * <zonbook></zonbook><xhtml></xhtml>
**/
public class CreateMeshOutput {
    @JsonProperty("mesh")
    public MeshData mesh;
    public CreateMeshOutput withMesh(MeshData mesh) {
        this.mesh = mesh;
        return this;
    }
}