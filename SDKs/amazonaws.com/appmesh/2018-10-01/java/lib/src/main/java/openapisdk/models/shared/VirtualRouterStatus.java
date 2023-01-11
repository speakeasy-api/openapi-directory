package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VirtualRouterStatus
 * An object representing the status of a virtual router. 
**/
public class VirtualRouterStatus {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public VirtualRouterStatusCodeEnum status;
    public VirtualRouterStatus withStatus(VirtualRouterStatusCodeEnum status) {
        this.status = status;
        return this;
    }
}