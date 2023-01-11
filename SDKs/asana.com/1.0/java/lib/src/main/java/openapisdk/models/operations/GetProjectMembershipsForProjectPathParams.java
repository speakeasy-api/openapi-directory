package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetProjectMembershipsForProjectPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project_gid")
    public String projectGid;
    public GetProjectMembershipsForProjectPathParams withProjectGid(String projectGid) {
        this.projectGid = projectGid;
        return this;
    }
}