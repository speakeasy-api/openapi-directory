package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * VirtualRouterStatus
 * An object that represents the status of a virtual router. 
**/
public class VirtualRouterStatus {
    @JsonProperty("status")
    public VirtualRouterStatusCodeEnum status;
    public VirtualRouterStatus withStatus(VirtualRouterStatusCodeEnum status) {
        this.status = status;
        return this;
    }
}