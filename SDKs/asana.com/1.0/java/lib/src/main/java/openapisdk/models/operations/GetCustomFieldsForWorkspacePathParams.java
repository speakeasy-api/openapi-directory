package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCustomFieldsForWorkspacePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=workspace_gid")
    public String workspaceGid;
    public GetCustomFieldsForWorkspacePathParams withWorkspaceGid(String workspaceGid) {
        this.workspaceGid = workspaceGid;
        return this;
    }
}