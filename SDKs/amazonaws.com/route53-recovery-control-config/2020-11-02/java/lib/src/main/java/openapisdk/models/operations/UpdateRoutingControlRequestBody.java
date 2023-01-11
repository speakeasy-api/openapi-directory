package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateRoutingControlRequestBody {
    @JsonProperty("RoutingControlArn")
    public String routingControlArn;
    public UpdateRoutingControlRequestBody withRoutingControlArn(String routingControlArn) {
        this.routingControlArn = routingControlArn;
        return this;
    }
    @JsonProperty("RoutingControlName")
    public String routingControlName;
    public UpdateRoutingControlRequestBody withRoutingControlName(String routingControlName) {
        this.routingControlName = routingControlName;
        return this;
    }
}