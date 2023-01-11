package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeMountTargetSecurityGroupsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=MountTargetId")
    public String mountTargetId;
    public DescribeMountTargetSecurityGroupsPathParams withMountTargetId(String mountTargetId) {
        this.mountTargetId = mountTargetId;
        return this;
    }
}