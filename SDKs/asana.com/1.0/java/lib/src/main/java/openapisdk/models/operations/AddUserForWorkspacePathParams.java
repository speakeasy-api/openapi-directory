package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddUserForWorkspacePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=workspace_gid")
    public String workspaceGid;
    public AddUserForWorkspacePathParams withWorkspaceGid(String workspaceGid) {
        this.workspaceGid = workspaceGid;
        return this;
    }
}