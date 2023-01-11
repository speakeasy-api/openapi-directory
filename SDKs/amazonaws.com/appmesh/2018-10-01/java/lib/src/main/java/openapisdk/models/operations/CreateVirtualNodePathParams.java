package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateVirtualNodePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=meshName")
    public String meshName;
    public CreateVirtualNodePathParams withMeshName(String meshName) {
        this.meshName = meshName;
        return this;
    }
}