package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * VirtualNodeStatus
 * An object that represents the current status of the virtual node.
**/
public class VirtualNodeStatus {
    @JsonProperty("status")
    public VirtualNodeStatusCodeEnum status;
    public VirtualNodeStatus withStatus(VirtualNodeStatusCodeEnum status) {
        this.status = status;
        return this;
    }
}