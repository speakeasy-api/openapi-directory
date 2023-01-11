package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * VirtualNodeHttp2ConnectionPool
 * An object that represents a type of connection pool.
**/
public class VirtualNodeHttp2ConnectionPool {
    @JsonProperty("maxRequests")
    public Long maxRequests;
    public VirtualNodeHttp2ConnectionPool withMaxRequests(Long maxRequests) {
        this.maxRequests = maxRequests;
        return this;
    }
}