package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateMeshOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mesh")
    public MeshData mesh;
    public CreateMeshOutput withMesh(MeshData mesh) {
        this.mesh = mesh;
        return this;
    }
}