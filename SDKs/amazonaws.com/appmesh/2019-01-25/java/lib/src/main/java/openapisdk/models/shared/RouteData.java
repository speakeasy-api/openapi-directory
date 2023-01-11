package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * RouteData
 * An object that represents a route returned by a describe operation.
**/
public class RouteData {
    @JsonProperty("meshName")
    public String meshName;
    public RouteData withMeshName(String meshName) {
        this.meshName = meshName;
        return this;
    }
    @JsonProperty("metadata")
    public ResourceMetadata metadata;
    public RouteData withMetadata(ResourceMetadata metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonProperty("routeName")
    public String routeName;
    public RouteData withRouteName(String routeName) {
        this.routeName = routeName;
        return this;
    }
    @JsonProperty("spec")
    public RouteSpec spec;
    public RouteData withSpec(RouteSpec spec) {
        this.spec = spec;
        return this;
    }
    @JsonProperty("status")
    public RouteStatus status;
    public RouteData withStatus(RouteStatus status) {
        this.status = status;
        return this;
    }
    @JsonProperty("virtualRouterName")
    public String virtualRouterName;
    public RouteData withVirtualRouterName(String virtualRouterName) {
        this.virtualRouterName = virtualRouterName;
        return this;
    }
}