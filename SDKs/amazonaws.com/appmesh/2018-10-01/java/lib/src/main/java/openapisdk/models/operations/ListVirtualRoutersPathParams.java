package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListVirtualRoutersPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=meshName")
    public String meshName;
    public ListVirtualRoutersPathParams withMeshName(String meshName) {
        this.meshName = meshName;
        return this;
    }
}