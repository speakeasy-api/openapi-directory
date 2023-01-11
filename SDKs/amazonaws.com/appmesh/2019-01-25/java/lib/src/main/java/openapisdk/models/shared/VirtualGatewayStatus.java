package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * VirtualGatewayStatus
 * An object that represents the status of the mesh resource.
**/
public class VirtualGatewayStatus {
    @JsonProperty("status")
    public VirtualGatewayStatusCodeEnum status;
    public VirtualGatewayStatus withStatus(VirtualGatewayStatusCodeEnum status) {
        this.status = status;
        return this;
    }
}