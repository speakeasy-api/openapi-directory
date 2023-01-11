package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetWorkspaceMembershipsForWorkspacePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=workspace_gid")
    public String workspaceGid;
    public GetWorkspaceMembershipsForWorkspacePathParams withWorkspaceGid(String workspaceGid) {
        this.workspaceGid = workspaceGid;
        return this;
    }
}