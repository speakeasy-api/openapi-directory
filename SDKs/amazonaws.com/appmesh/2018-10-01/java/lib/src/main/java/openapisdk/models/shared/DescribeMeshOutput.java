package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeMeshOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mesh")
    public MeshData mesh;
    public DescribeMeshOutput withMesh(MeshData mesh) {
        this.mesh = mesh;
        return this;
    }
}