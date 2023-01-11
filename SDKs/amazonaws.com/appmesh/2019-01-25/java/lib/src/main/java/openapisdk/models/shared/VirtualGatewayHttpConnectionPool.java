package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VirtualGatewayHttpConnectionPool
 * An object that represents a type of connection pool.
**/
public class VirtualGatewayHttpConnectionPool {
    @JsonProperty("maxConnections")
    public Long maxConnections;
    public VirtualGatewayHttpConnectionPool withMaxConnections(Long maxConnections) {
        this.maxConnections = maxConnections;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxPendingRequests")
    public Long maxPendingRequests;
    public VirtualGatewayHttpConnectionPool withMaxPendingRequests(Long maxPendingRequests) {
        this.maxPendingRequests = maxPendingRequests;
        return this;
    }
}