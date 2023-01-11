package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateRoutingControlStateRequest {
    @JsonProperty("RoutingControlArn")
    public String routingControlArn;
    public UpdateRoutingControlStateRequest withRoutingControlArn(String routingControlArn) {
        this.routingControlArn = routingControlArn;
        return this;
    }
    @JsonProperty("RoutingControlState")
    public RoutingControlStateEnum routingControlState;
    public UpdateRoutingControlStateRequest withRoutingControlState(RoutingControlStateEnum routingControlState) {
        this.routingControlState = routingControlState;
        return this;
    }
}