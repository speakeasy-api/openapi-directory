package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * VirtualNodeGrpcConnectionPool
 * An object that represents a type of connection pool.
**/
public class VirtualNodeGrpcConnectionPool {
    @JsonProperty("maxRequests")
    public Long maxRequests;
    public VirtualNodeGrpcConnectionPool withMaxRequests(Long maxRequests) {
        this.maxRequests = maxRequests;
        return this;
    }
}