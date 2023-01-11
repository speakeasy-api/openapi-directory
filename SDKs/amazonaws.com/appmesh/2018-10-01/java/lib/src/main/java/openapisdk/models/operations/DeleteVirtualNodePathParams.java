package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteVirtualNodePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=meshName")
    public String meshName;
    public DeleteVirtualNodePathParams withMeshName(String meshName) {
        this.meshName = meshName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=virtualNodeName")
    public String virtualNodeName;
    public DeleteVirtualNodePathParams withVirtualNodeName(String virtualNodeName) {
        this.virtualNodeName = virtualNodeName;
        return this;
    }
}