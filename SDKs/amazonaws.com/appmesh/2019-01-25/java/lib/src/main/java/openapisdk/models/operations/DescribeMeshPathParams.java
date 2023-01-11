package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeMeshPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=meshName")
    public String meshName;
    public DescribeMeshPathParams withMeshName(String meshName) {
        this.meshName = meshName;
        return this;
    }
}