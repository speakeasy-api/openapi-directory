package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VirtualNodeHttpConnectionPool
 * An object that represents a type of connection pool.
**/
public class VirtualNodeHttpConnectionPool {
    @JsonProperty("maxConnections")
    public Long maxConnections;
    public VirtualNodeHttpConnectionPool withMaxConnections(Long maxConnections) {
        this.maxConnections = maxConnections;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxPendingRequests")
    public Long maxPendingRequests;
    public VirtualNodeHttpConnectionPool withMaxPendingRequests(Long maxPendingRequests) {
        this.maxPendingRequests = maxPendingRequests;
        return this;
    }
}