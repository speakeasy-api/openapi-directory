package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VirtualNodeStatus
 * An object representing the current status of the virtual node.
**/
public class VirtualNodeStatus {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public VirtualNodeStatusCodeEnum status;
    public VirtualNodeStatus withStatus(VirtualNodeStatusCodeEnum status) {
        this.status = status;
        return this;
    }
}