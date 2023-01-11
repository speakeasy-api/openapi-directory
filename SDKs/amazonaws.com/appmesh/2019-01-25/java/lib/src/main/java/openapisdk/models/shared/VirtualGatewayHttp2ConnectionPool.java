package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * VirtualGatewayHttp2ConnectionPool
 * An object that represents a type of connection pool.
**/
public class VirtualGatewayHttp2ConnectionPool {
    @JsonProperty("maxRequests")
    public Long maxRequests;
    public VirtualGatewayHttp2ConnectionPool withMaxRequests(Long maxRequests) {
        this.maxRequests = maxRequests;
        return this;
    }
}