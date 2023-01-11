package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListMeshesOutput {
    @JsonProperty("meshes")
    public MeshRef[] meshes;
    public ListMeshesOutput withMeshes(MeshRef[] meshes) {
        this.meshes = meshes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListMeshesOutput withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}