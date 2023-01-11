package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetWorkspacesWorkspaceSearchCodePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=workspace")
    public String workspace;
    public GetWorkspacesWorkspaceSearchCodePathParams withWorkspace(String workspace) {
        this.workspace = workspace;
        return this;
    }
}