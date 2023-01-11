package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostWorkspacesWorkspaceProjectsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=workspace")
    public String workspace;
    public PostWorkspacesWorkspaceProjectsPathParams withWorkspace(String workspace) {
        this.workspace = workspace;
        return this;
    }
}