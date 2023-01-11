package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateRouteRequestBodySpec
 * An object that represents a route specification. Specify one route type.
**/
public class UpdateRouteRequestBodySpec {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("grpcRoute")
    public openapisdk.models.shared.GrpcRoute grpcRoute;
    public UpdateRouteRequestBodySpec withGrpcRoute(openapisdk.models.shared.GrpcRoute grpcRoute) {
        this.grpcRoute = grpcRoute;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("http2Route")
    public openapisdk.models.shared.HttpRoute http2Route;
    public UpdateRouteRequestBodySpec withHttp2Route(openapisdk.models.shared.HttpRoute http2Route) {
        this.http2Route = http2Route;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("httpRoute")
    public openapisdk.models.shared.HttpRoute httpRoute;
    public UpdateRouteRequestBodySpec withHttpRoute(openapisdk.models.shared.HttpRoute httpRoute) {
        this.httpRoute = httpRoute;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("priority")
    public Long priority;
    public UpdateRouteRequestBodySpec withPriority(Long priority) {
        this.priority = priority;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tcpRoute")
    public openapisdk.models.shared.TcpRoute tcpRoute;
    public UpdateRouteRequestBodySpec withTcpRoute(openapisdk.models.shared.TcpRoute tcpRoute) {
        this.tcpRoute = tcpRoute;
        return this;
    }
}