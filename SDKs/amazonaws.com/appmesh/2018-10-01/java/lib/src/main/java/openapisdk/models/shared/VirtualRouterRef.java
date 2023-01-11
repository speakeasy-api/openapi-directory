package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VirtualRouterRef
 * An object representing a virtual router returned by a list operation.
**/
public class VirtualRouterRef {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("arn")
    public String arn;
    public VirtualRouterRef withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meshName")
    public String meshName;
    public VirtualRouterRef withMeshName(String meshName) {
        this.meshName = meshName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("virtualRouterName")
    public String virtualRouterName;
    public VirtualRouterRef withVirtualRouterName(String virtualRouterName) {
        this.virtualRouterName = virtualRouterName;
        return this;
    }
}