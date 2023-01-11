package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTasksForProjectPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project_gid")
    public String projectGid;
    public GetTasksForProjectPathParams withProjectGid(String projectGid) {
        this.projectGid = projectGid;
        return this;
    }
}