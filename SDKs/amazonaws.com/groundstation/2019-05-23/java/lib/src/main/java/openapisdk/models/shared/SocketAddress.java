package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * SocketAddress
 * Information about the socket address.
**/
public class SocketAddress {
    @JsonProperty("name")
    public String name;
    public SocketAddress withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("port")
    public Long port;
    public SocketAddress withPort(Long port) {
        this.port = port;
        return this;
    }
}