package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetWorkspacesWorkspaceHooksPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=workspace")
    public String workspace;
    public GetWorkspacesWorkspaceHooksPathParams withWorkspace(String workspace) {
        this.workspace = workspace;
        return this;
    }
}