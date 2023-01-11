package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListenerTimeout
 * An object that represents timeouts for different protocols.
**/
public class ListenerTimeout {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("grpc")
    public GrpcTimeout grpc;
    public ListenerTimeout withGrpc(GrpcTimeout grpc) {
        this.grpc = grpc;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("http")
    public HttpTimeout http;
    public ListenerTimeout withHttp(HttpTimeout http) {
        this.http = http;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("http2")
    public HttpTimeout http2;
    public ListenerTimeout withHttp2(HttpTimeout http2) {
        this.http2 = http2;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tcp")
    public TcpTimeout tcp;
    public ListenerTimeout withTcp(TcpTimeout tcp) {
        this.tcp = tcp;
        return this;
    }
}