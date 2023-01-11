package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUsersWorkspaceRepositoriesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=workspace")
    public String workspace;
    public GetUsersWorkspaceRepositoriesPathParams withWorkspace(String workspace) {
        this.workspace = workspace;
        return this;
    }
}