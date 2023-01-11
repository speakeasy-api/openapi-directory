package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateRouteRequestBodySpec
 * An object that represents a route specification. Specify one route type.
**/
public class CreateRouteRequestBodySpec {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("grpcRoute")
    public openapisdk.models.shared.GrpcRoute grpcRoute;
    public CreateRouteRequestBodySpec withGrpcRoute(openapisdk.models.shared.GrpcRoute grpcRoute) {
        this.grpcRoute = grpcRoute;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("http2Route")
    public openapisdk.models.shared.HttpRoute http2Route;
    public CreateRouteRequestBodySpec withHttp2Route(openapisdk.models.shared.HttpRoute http2Route) {
        this.http2Route = http2Route;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("httpRoute")
    public openapisdk.models.shared.HttpRoute httpRoute;
    public CreateRouteRequestBodySpec withHttpRoute(openapisdk.models.shared.HttpRoute httpRoute) {
        this.httpRoute = httpRoute;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("priority")
    public Long priority;
    public CreateRouteRequestBodySpec withPriority(Long priority) {
        this.priority = priority;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tcpRoute")
    public openapisdk.models.shared.TcpRoute tcpRoute;
    public CreateRouteRequestBodySpec withTcpRoute(openapisdk.models.shared.TcpRoute tcpRoute) {
        this.tcpRoute = tcpRoute;
        return this;
    }
}