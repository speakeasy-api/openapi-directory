package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteProjectPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project_gid")
    public String projectGid;
    public DeleteProjectPathParams withProjectGid(String projectGid) {
        this.projectGid = projectGid;
        return this;
    }
}