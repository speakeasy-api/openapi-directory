package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateRoutingControlResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RoutingControl")
    public RoutingControl routingControl;
    public UpdateRoutingControlResponse withRoutingControl(RoutingControl routingControl) {
        this.routingControl = routingControl;
        return this;
    }
}