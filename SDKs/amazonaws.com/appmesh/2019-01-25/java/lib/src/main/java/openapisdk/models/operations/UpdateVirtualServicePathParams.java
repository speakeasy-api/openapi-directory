package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateVirtualServicePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=meshName")
    public String meshName;
    public UpdateVirtualServicePathParams withMeshName(String meshName) {
        this.meshName = meshName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=virtualServiceName")
    public String virtualServiceName;
    public UpdateVirtualServicePathParams withVirtualServiceName(String virtualServiceName) {
        this.virtualServiceName = virtualServiceName;
        return this;
    }
}