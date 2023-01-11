package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GatewayRouteData
 * An object that represents a gateway route returned by a describe operation.
**/
public class GatewayRouteData {
    @JsonProperty("gatewayRouteName")
    public String gatewayRouteName;
    public GatewayRouteData withGatewayRouteName(String gatewayRouteName) {
        this.gatewayRouteName = gatewayRouteName;
        return this;
    }
    @JsonProperty("meshName")
    public String meshName;
    public GatewayRouteData withMeshName(String meshName) {
        this.meshName = meshName;
        return this;
    }
    @JsonProperty("metadata")
    public ResourceMetadata metadata;
    public GatewayRouteData withMetadata(ResourceMetadata metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonProperty("spec")
    public GatewayRouteSpec spec;
    public GatewayRouteData withSpec(GatewayRouteSpec spec) {
        this.spec = spec;
        return this;
    }
    @JsonProperty("status")
    public GatewayRouteStatus status;
    public GatewayRouteData withStatus(GatewayRouteStatus status) {
        this.status = status;
        return this;
    }
    @JsonProperty("virtualGatewayName")
    public String virtualGatewayName;
    public GatewayRouteData withVirtualGatewayName(String virtualGatewayName) {
        this.virtualGatewayName = virtualGatewayName;
        return this;
    }
}