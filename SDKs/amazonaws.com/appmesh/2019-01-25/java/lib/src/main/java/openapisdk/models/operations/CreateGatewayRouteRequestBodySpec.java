package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateGatewayRouteRequestBodySpec
 * An object that represents a gateway route specification. Specify one gateway route type.
**/
public class CreateGatewayRouteRequestBodySpec {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("grpcRoute")
    public openapisdk.models.shared.GrpcGatewayRoute grpcRoute;
    public CreateGatewayRouteRequestBodySpec withGrpcRoute(openapisdk.models.shared.GrpcGatewayRoute grpcRoute) {
        this.grpcRoute = grpcRoute;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("http2Route")
    public openapisdk.models.shared.HttpGatewayRoute http2Route;
    public CreateGatewayRouteRequestBodySpec withHttp2Route(openapisdk.models.shared.HttpGatewayRoute http2Route) {
        this.http2Route = http2Route;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("httpRoute")
    public openapisdk.models.shared.HttpGatewayRoute httpRoute;
    public CreateGatewayRouteRequestBodySpec withHttpRoute(openapisdk.models.shared.HttpGatewayRoute httpRoute) {
        this.httpRoute = httpRoute;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("priority")
    public Long priority;
    public CreateGatewayRouteRequestBodySpec withPriority(Long priority) {
        this.priority = priority;
        return this;
    }
}