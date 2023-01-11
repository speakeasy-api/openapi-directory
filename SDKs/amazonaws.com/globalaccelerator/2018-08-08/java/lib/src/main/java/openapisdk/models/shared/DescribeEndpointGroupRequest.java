package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeEndpointGroupRequest {
    @JsonProperty("EndpointGroupArn")
    public String endpointGroupArn;
    public DescribeEndpointGroupRequest withEndpointGroupArn(String endpointGroupArn) {
        this.endpointGroupArn = endpointGroupArn;
        return this;
    }
}