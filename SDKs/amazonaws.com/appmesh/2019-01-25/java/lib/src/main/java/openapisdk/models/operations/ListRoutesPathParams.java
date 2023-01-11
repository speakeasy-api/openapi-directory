package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListRoutesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=meshName")
    public String meshName;
    public ListRoutesPathParams withMeshName(String meshName) {
        this.meshName = meshName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=virtualRouterName")
    public String virtualRouterName;
    public ListRoutesPathParams withVirtualRouterName(String virtualRouterName) {
        this.virtualRouterName = virtualRouterName;
        return this;
    }
}