package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTeamsWorkspaceRepositoriesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=workspace")
    public String workspace;
    public GetTeamsWorkspaceRepositoriesPathParams withWorkspace(String workspace) {
        this.workspace = workspace;
        return this;
    }
}