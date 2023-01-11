package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTaskCountsForProjectPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project_gid")
    public String projectGid;
    public GetTaskCountsForProjectPathParams withProjectGid(String projectGid) {
        this.projectGid = projectGid;
        return this;
    }
}