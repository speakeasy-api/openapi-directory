package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VirtualNodeConnectionPool
 * <p>An object that represents the type of virtual node connection pool.</p> <p>Only one protocol is used at a time and should be the same protocol as the one chosen under port mapping.</p> <p>If not present the default value for <code>maxPendingRequests</code> is <code>2147483647</code>.</p> <p/>
**/
public class VirtualNodeConnectionPool {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("grpc")
    public VirtualNodeGrpcConnectionPool grpc;
    public VirtualNodeConnectionPool withGrpc(VirtualNodeGrpcConnectionPool grpc) {
        this.grpc = grpc;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("http")
    public VirtualNodeHttpConnectionPool http;
    public VirtualNodeConnectionPool withHttp(VirtualNodeHttpConnectionPool http) {
        this.http = http;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("http2")
    public VirtualNodeHttp2ConnectionPool http2;
    public VirtualNodeConnectionPool withHttp2(VirtualNodeHttp2ConnectionPool http2) {
        this.http2 = http2;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tcp")
    public VirtualNodeTcpConnectionPool tcp;
    public VirtualNodeConnectionPool withTcp(VirtualNodeTcpConnectionPool tcp) {
        this.tcp = tcp;
        return this;
    }
}