package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PortMapping
 * An object representing a virtual node listener port mapping.
**/
public class PortMapping {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("port")
    public Long port;
    public PortMapping withPort(Long port) {
        this.port = port;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("protocol")
    public PortProtocolEnum protocol;
    public PortMapping withProtocol(PortProtocolEnum protocol) {
        this.protocol = protocol;
        return this;
    }
}