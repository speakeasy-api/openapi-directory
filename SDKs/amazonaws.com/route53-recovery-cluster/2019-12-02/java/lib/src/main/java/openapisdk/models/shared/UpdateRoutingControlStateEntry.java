package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * UpdateRoutingControlStateEntry
 * A routing control state.
**/
public class UpdateRoutingControlStateEntry {
    @JsonProperty("RoutingControlArn")
    public String routingControlArn;
    public UpdateRoutingControlStateEntry withRoutingControlArn(String routingControlArn) {
        this.routingControlArn = routingControlArn;
        return this;
    }
    @JsonProperty("RoutingControlState")
    public RoutingControlStateEnum routingControlState;
    public UpdateRoutingControlStateEntry withRoutingControlState(RoutingControlStateEnum routingControlState) {
        this.routingControlState = routingControlState;
        return this;
    }
}