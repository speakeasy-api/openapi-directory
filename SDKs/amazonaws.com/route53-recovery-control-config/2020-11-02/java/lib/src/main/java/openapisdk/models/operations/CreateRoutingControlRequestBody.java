package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateRoutingControlRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ClientToken")
    public String clientToken;
    public CreateRoutingControlRequestBody withClientToken(String clientToken) {
        this.clientToken = clientToken;
        return this;
    }
    @JsonProperty("ClusterArn")
    public String clusterArn;
    public CreateRoutingControlRequestBody withClusterArn(String clusterArn) {
        this.clusterArn = clusterArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ControlPanelArn")
    public String controlPanelArn;
    public CreateRoutingControlRequestBody withControlPanelArn(String controlPanelArn) {
        this.controlPanelArn = controlPanelArn;
        return this;
    }
    @JsonProperty("RoutingControlName")
    public String routingControlName;
    public CreateRoutingControlRequestBody withRoutingControlName(String routingControlName) {
        this.routingControlName = routingControlName;
        return this;
    }
}