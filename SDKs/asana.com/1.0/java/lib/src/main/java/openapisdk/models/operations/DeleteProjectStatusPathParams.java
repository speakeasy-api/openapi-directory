package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteProjectStatusPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project_status_gid")
    public String projectStatusGid;
    public DeleteProjectStatusPathParams withProjectStatusGid(String projectStatusGid) {
        this.projectStatusGid = projectStatusGid;
        return this;
    }
}