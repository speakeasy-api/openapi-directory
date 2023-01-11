package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateVirtualRouterPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=meshName")
    public String meshName;
    public CreateVirtualRouterPathParams withMeshName(String meshName) {
        this.meshName = meshName;
        return this;
    }
}