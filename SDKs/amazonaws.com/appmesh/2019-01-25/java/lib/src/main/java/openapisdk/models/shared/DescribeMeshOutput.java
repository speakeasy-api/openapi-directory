package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DescribeMeshOutput
 * <zonbook></zonbook><xhtml></xhtml>
**/
public class DescribeMeshOutput {
    @JsonProperty("mesh")
    public MeshData mesh;
    public DescribeMeshOutput withMesh(MeshData mesh) {
        this.mesh = mesh;
        return this;
    }
}