package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DenyCustomRoutingTrafficRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DenyAllTrafficToEndpoint")
    public Boolean denyAllTrafficToEndpoint;
    public DenyCustomRoutingTrafficRequest withDenyAllTrafficToEndpoint(Boolean denyAllTrafficToEndpoint) {
        this.denyAllTrafficToEndpoint = denyAllTrafficToEndpoint;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DestinationAddresses")
    public String[] destinationAddresses;
    public DenyCustomRoutingTrafficRequest withDestinationAddresses(String[] destinationAddresses) {
        this.destinationAddresses = destinationAddresses;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DestinationPorts")
    public Long[] destinationPorts;
    public DenyCustomRoutingTrafficRequest withDestinationPorts(Long[] destinationPorts) {
        this.destinationPorts = destinationPorts;
        return this;
    }
    @JsonProperty("EndpointGroupArn")
    public String endpointGroupArn;
    public DenyCustomRoutingTrafficRequest withEndpointGroupArn(String endpointGroupArn) {
        this.endpointGroupArn = endpointGroupArn;
        return this;
    }
    @JsonProperty("EndpointId")
    public String endpointId;
    public DenyCustomRoutingTrafficRequest withEndpointId(String endpointId) {
        this.endpointId = endpointId;
        return this;
    }
}