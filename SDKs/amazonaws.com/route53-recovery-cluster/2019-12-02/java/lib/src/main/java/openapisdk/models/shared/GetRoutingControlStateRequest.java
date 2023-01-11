package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetRoutingControlStateRequest {
    @JsonProperty("RoutingControlArn")
    public String routingControlArn;
    public GetRoutingControlStateRequest withRoutingControlArn(String routingControlArn) {
        this.routingControlArn = routingControlArn;
        return this;
    }
}