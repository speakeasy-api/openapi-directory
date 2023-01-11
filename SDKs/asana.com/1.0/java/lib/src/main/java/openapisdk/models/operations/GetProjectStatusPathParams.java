package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetProjectStatusPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project_status_gid")
    public String projectStatusGid;
    public GetProjectStatusPathParams withProjectStatusGid(String projectStatusGid) {
        this.projectStatusGid = projectStatusGid;
        return this;
    }
}