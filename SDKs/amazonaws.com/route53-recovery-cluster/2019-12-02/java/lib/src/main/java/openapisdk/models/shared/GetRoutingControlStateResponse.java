package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetRoutingControlStateResponse {
    @JsonProperty("RoutingControlArn")
    public String routingControlArn;
    public GetRoutingControlStateResponse withRoutingControlArn(String routingControlArn) {
        this.routingControlArn = routingControlArn;
        return this;
    }
    @JsonProperty("RoutingControlState")
    public RoutingControlStateEnum routingControlState;
    public GetRoutingControlStateResponse withRoutingControlState(RoutingControlStateEnum routingControlState) {
        this.routingControlState = routingControlState;
        return this;
    }
}