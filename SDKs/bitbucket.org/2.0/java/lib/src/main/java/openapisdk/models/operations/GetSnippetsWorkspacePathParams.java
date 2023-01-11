package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSnippetsWorkspacePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=workspace")
    public String workspace;
    public GetSnippetsWorkspacePathParams withWorkspace(String workspace) {
        this.workspace = workspace;
        return this;
    }
}