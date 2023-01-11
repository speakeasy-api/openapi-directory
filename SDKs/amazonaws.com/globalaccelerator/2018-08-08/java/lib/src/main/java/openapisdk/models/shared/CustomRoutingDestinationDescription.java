package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CustomRoutingDestinationDescription
 * For a custom routing accelerator, describes the port range and protocol for all endpoints (virtual private cloud subnets) in an endpoint group to accept client traffic on.
**/
public class CustomRoutingDestinationDescription {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FromPort")
    public Long fromPort;
    public CustomRoutingDestinationDescription withFromPort(Long fromPort) {
        this.fromPort = fromPort;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Protocols")
    public ProtocolEnum[] protocols;
    public CustomRoutingDestinationDescription withProtocols(ProtocolEnum[] protocols) {
        this.protocols = protocols;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ToPort")
    public Long toPort;
    public CustomRoutingDestinationDescription withToPort(Long toPort) {
        this.toPort = toPort;
        return this;
    }
}