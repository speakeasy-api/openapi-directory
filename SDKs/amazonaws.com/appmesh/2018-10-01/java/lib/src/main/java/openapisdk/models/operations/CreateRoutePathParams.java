package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateRoutePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=meshName")
    public String meshName;
    public CreateRoutePathParams withMeshName(String meshName) {
        this.meshName = meshName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=virtualRouterName")
    public String virtualRouterName;
    public CreateRoutePathParams withVirtualRouterName(String virtualRouterName) {
        this.virtualRouterName = virtualRouterName;
        return this;
    }
}