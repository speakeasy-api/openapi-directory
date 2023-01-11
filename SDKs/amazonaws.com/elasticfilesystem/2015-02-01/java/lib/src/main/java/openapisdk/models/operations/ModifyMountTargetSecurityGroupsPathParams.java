package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ModifyMountTargetSecurityGroupsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=MountTargetId")
    public String mountTargetId;
    public ModifyMountTargetSecurityGroupsPathParams withMountTargetId(String mountTargetId) {
        this.mountTargetId = mountTargetId;
        return this;
    }
}