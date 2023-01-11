package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteMeshPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=meshName")
    public String meshName;
    public DeleteMeshPathParams withMeshName(String meshName) {
        this.meshName = meshName;
        return this;
    }
}