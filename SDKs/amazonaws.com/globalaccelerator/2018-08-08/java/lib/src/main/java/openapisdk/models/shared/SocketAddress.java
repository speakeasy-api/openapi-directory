package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SocketAddress
 * An IP address/port combination.
**/
public class SocketAddress {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IpAddress")
    public String ipAddress;
    public SocketAddress withIpAddress(String ipAddress) {
        this.ipAddress = ipAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Port")
    public Long port;
    public SocketAddress withPort(Long port) {
        this.port = port;
        return this;
    }
}