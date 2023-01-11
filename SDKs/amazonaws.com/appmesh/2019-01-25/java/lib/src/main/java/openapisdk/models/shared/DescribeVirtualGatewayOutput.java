package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeVirtualGatewayOutput {
    @JsonProperty("virtualGateway")
    public VirtualGatewayData virtualGateway;
    public DescribeVirtualGatewayOutput withVirtualGateway(VirtualGatewayData virtualGateway) {
        this.virtualGateway = virtualGateway;
        return this;
    }
}