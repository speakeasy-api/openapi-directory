package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CustomRoutingDestinationConfiguration
 * For a custom routing accelerator, sets the port range and protocol for all endpoints (virtual private cloud subnets) in an endpoint group to accept client traffic on.
**/
public class CustomRoutingDestinationConfiguration {
    @JsonProperty("FromPort")
    public Long fromPort;
    public CustomRoutingDestinationConfiguration withFromPort(Long fromPort) {
        this.fromPort = fromPort;
        return this;
    }
    @JsonProperty("Protocols")
    public CustomRoutingProtocolEnum[] protocols;
    public CustomRoutingDestinationConfiguration withProtocols(CustomRoutingProtocolEnum[] protocols) {
        this.protocols = protocols;
        return this;
    }
    @JsonProperty("ToPort")
    public Long toPort;
    public CustomRoutingDestinationConfiguration withToPort(Long toPort) {
        this.toPort = toPort;
        return this;
    }
}