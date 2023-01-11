package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateRoutingControlResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RoutingControl")
    public RoutingControl routingControl;
    public CreateRoutingControlResponse withRoutingControl(RoutingControl routingControl) {
        this.routingControl = routingControl;
        return this;
    }
}