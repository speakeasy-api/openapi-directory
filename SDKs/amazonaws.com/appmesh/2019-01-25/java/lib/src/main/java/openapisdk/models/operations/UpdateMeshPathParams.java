package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateMeshPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=meshName")
    public String meshName;
    public UpdateMeshPathParams withMeshName(String meshName) {
        this.meshName = meshName;
        return this;
    }
}