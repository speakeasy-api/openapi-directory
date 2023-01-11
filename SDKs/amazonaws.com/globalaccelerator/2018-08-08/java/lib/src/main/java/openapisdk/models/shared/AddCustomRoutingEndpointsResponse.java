package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AddCustomRoutingEndpointsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EndpointDescriptions")
    public CustomRoutingEndpointDescription[] endpointDescriptions;
    public AddCustomRoutingEndpointsResponse withEndpointDescriptions(CustomRoutingEndpointDescription[] endpointDescriptions) {
        this.endpointDescriptions = endpointDescriptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EndpointGroupArn")
    public String endpointGroupArn;
    public AddCustomRoutingEndpointsResponse withEndpointGroupArn(String endpointGroupArn) {
        this.endpointGroupArn = endpointGroupArn;
        return this;
    }
}