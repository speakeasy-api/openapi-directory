package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostSnippetsWorkspacePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=workspace")
    public String workspace;
    public PostSnippetsWorkspacePathParams withWorkspace(String workspace) {
        this.workspace = workspace;
        return this;
    }
}