package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetWorkspacesWorkspacePermissionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=workspace")
    public String workspace;
    public GetWorkspacesWorkspacePermissionsPathParams withWorkspace(String workspace) {
        this.workspace = workspace;
        return this;
    }
}