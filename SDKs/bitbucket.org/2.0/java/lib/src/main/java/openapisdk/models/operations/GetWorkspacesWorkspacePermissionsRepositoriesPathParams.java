package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetWorkspacesWorkspacePermissionsRepositoriesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=workspace")
    public String workspace;
    public GetWorkspacesWorkspacePermissionsRepositoriesPathParams withWorkspace(String workspace) {
        this.workspace = workspace;
        return this;
    }
}