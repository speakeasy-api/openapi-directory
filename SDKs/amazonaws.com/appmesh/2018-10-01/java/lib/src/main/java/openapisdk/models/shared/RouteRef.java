package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RouteRef
 * An object representing a route returned by a list operation.
**/
public class RouteRef {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("arn")
    public String arn;
    public RouteRef withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meshName")
    public String meshName;
    public RouteRef withMeshName(String meshName) {
        this.meshName = meshName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("routeName")
    public String routeName;
    public RouteRef withRouteName(String routeName) {
        this.routeName = routeName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("virtualRouterName")
    public String virtualRouterName;
    public RouteRef withVirtualRouterName(String virtualRouterName) {
        this.virtualRouterName = virtualRouterName;
        return this;
    }
}