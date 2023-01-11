package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeCustomRoutingEndpointGroupResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EndpointGroup")
    public CustomRoutingEndpointGroup endpointGroup;
    public DescribeCustomRoutingEndpointGroupResponse withEndpointGroup(CustomRoutingEndpointGroup endpointGroup) {
        this.endpointGroup = endpointGroup;
        return this;
    }
}