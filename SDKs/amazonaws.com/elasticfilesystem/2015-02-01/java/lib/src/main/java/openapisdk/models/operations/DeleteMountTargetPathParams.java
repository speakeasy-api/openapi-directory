package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteMountTargetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=MountTargetId")
    public String mountTargetId;
    public DeleteMountTargetPathParams withMountTargetId(String mountTargetId) {
        this.mountTargetId = mountTargetId;
        return this;
    }
}