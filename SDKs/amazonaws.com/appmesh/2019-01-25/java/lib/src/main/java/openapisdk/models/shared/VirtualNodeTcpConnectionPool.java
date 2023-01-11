package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * VirtualNodeTcpConnectionPool
 * An object that represents a type of connection pool.
**/
public class VirtualNodeTcpConnectionPool {
    @JsonProperty("maxConnections")
    public Long maxConnections;
    public VirtualNodeTcpConnectionPool withMaxConnections(Long maxConnections) {
        this.maxConnections = maxConnections;
        return this;
    }
}