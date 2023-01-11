package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VirtualGatewayConnectionPool
 * <p>An object that represents the type of virtual gateway connection pool.</p> <p>Only one protocol is used at a time and should be the same protocol as the one chosen under port mapping.</p> <p>If not present the default value for <code>maxPendingRequests</code> is <code>2147483647</code>.</p>
**/
public class VirtualGatewayConnectionPool {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("grpc")
    public VirtualGatewayGrpcConnectionPool grpc;
    public VirtualGatewayConnectionPool withGrpc(VirtualGatewayGrpcConnectionPool grpc) {
        this.grpc = grpc;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("http")
    public VirtualGatewayHttpConnectionPool http;
    public VirtualGatewayConnectionPool withHttp(VirtualGatewayHttpConnectionPool http) {
        this.http = http;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("http2")
    public VirtualGatewayHttp2ConnectionPool http2;
    public VirtualGatewayConnectionPool withHttp2(VirtualGatewayHttp2ConnectionPool http2) {
        this.http2 = http2;
        return this;
    }
}