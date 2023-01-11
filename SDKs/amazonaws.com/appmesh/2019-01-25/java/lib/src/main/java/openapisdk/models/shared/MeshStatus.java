package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MeshStatus
 * An object that represents the status of a service mesh.
**/
public class MeshStatus {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public MeshStatusCodeEnum status;
    public MeshStatus withStatus(MeshStatusCodeEnum status) {
        this.status = status;
        return this;
    }
}