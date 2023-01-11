package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MeshRef
 * An object representing a service mesh returned by a list operation.
**/
public class MeshRef {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("arn")
    public String arn;
    public MeshRef withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meshName")
    public String meshName;
    public MeshRef withMeshName(String meshName) {
        this.meshName = meshName;
        return this;
    }
}