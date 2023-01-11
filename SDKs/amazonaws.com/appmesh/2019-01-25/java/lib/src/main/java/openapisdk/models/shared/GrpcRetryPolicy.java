package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GrpcRetryPolicy
 * An object that represents a retry policy. Specify at least one value for at least one of the types of <code>RetryEvents</code>, a value for <code>maxRetries</code>, and a value for <code>perRetryTimeout</code>. Both <code>server-error</code> and <code>gateway-error</code> under <code>httpRetryEvents</code> include the Envoy <code>reset</code> policy. For more information on the <code>reset</code> policy, see the <a href="https://www.envoyproxy.io/docs/envoy/latest/configuration/http/http_filters/router_filter#x-envoy-retry-on">Envoy documentation</a>.
**/
public class GrpcRetryPolicy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("grpcRetryEvents")
    public GrpcRetryPolicyEventEnum[] grpcRetryEvents;
    public GrpcRetryPolicy withGrpcRetryEvents(GrpcRetryPolicyEventEnum[] grpcRetryEvents) {
        this.grpcRetryEvents = grpcRetryEvents;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("httpRetryEvents")
    public String[] httpRetryEvents;
    public GrpcRetryPolicy withHttpRetryEvents(String[] httpRetryEvents) {
        this.httpRetryEvents = httpRetryEvents;
        return this;
    }
    @JsonProperty("maxRetries")
    public Long maxRetries;
    public GrpcRetryPolicy withMaxRetries(Long maxRetries) {
        this.maxRetries = maxRetries;
        return this;
    }
    @JsonProperty("perRetryTimeout")
    public Duration perRetryTimeout;
    public GrpcRetryPolicy withPerRetryTimeout(Duration perRetryTimeout) {
        this.perRetryTimeout = perRetryTimeout;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tcpRetryEvents")
    public TcpRetryPolicyEventEnum[] tcpRetryEvents;
    public GrpcRetryPolicy withTcpRetryEvents(TcpRetryPolicyEventEnum[] tcpRetryEvents) {
        this.tcpRetryEvents = tcpRetryEvents;
        return this;
    }
}