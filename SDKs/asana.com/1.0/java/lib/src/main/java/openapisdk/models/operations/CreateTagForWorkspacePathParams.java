package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateTagForWorkspacePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=workspace_gid")
    public String workspaceGid;
    public CreateTagForWorkspacePathParams withWorkspaceGid(String workspaceGid) {
        this.workspaceGid = workspaceGid;
        return this;
    }
}