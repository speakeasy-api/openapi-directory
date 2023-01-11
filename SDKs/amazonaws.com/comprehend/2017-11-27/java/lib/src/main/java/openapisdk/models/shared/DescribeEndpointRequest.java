package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeEndpointRequest {
    @JsonProperty("EndpointArn")
    public String endpointArn;
    public DescribeEndpointRequest withEndpointArn(String endpointArn) {
        this.endpointArn = endpointArn;
        return this;
    }
}