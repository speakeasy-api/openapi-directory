package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VirtualGateway
 * Information about a virtual private gateway for a private virtual interface.
**/
public class VirtualGateway {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("virtualGatewayId")
    public String virtualGatewayId;
    public VirtualGateway withVirtualGatewayId(String virtualGatewayId) {
        this.virtualGatewayId = virtualGatewayId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("virtualGatewayState")
    public String virtualGatewayState;
    public VirtualGateway withVirtualGatewayState(String virtualGatewayState) {
        this.virtualGatewayState = virtualGatewayState;
        return this;
    }
}