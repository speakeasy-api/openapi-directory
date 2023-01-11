package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GrpcGatewayRouteMatch
 * An object that represents the criteria for determining a request match.
**/
public class GrpcGatewayRouteMatch {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hostname")
    public GatewayRouteHostnameMatch hostname;
    public GrpcGatewayRouteMatch withHostname(GatewayRouteHostnameMatch hostname) {
        this.hostname = hostname;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadata")
    public GrpcGatewayRouteMetadata[] metadata;
    public GrpcGatewayRouteMatch withMetadata(GrpcGatewayRouteMetadata[] metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceName")
    public String serviceName;
    public GrpcGatewayRouteMatch withServiceName(String serviceName) {
        this.serviceName = serviceName;
        return this;
    }
}