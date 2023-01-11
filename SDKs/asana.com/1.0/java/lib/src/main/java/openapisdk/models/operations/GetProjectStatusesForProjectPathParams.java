package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetProjectStatusesForProjectPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project_gid")
    public String projectGid;
    public GetProjectStatusesForProjectPathParams withProjectGid(String projectGid) {
        this.projectGid = projectGid;
        return this;
    }
}