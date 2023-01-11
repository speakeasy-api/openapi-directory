package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * VirtualGatewayGrpcConnectionPool
 * An object that represents a type of connection pool.
**/
public class VirtualGatewayGrpcConnectionPool {
    @JsonProperty("maxRequests")
    public Long maxRequests;
    public VirtualGatewayGrpcConnectionPool withMaxRequests(Long maxRequests) {
        this.maxRequests = maxRequests;
        return this;
    }
}