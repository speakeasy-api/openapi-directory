package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PortMapping
 * An object that represents a port mapping.
**/
public class PortMapping {
    @JsonProperty("port")
    public Long port;
    public PortMapping withPort(Long port) {
        this.port = port;
        return this;
    }
    @JsonProperty("protocol")
    public PortProtocolEnum protocol;
    public PortMapping withProtocol(PortProtocolEnum protocol) {
        this.protocol = protocol;
        return this;
    }
}