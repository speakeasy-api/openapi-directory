package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeCustomRoutingEndpointGroupRequest {
    @JsonProperty("EndpointGroupArn")
    public String endpointGroupArn;
    public DescribeCustomRoutingEndpointGroupRequest withEndpointGroupArn(String endpointGroupArn) {
        this.endpointGroupArn = endpointGroupArn;
        return this;
    }
}