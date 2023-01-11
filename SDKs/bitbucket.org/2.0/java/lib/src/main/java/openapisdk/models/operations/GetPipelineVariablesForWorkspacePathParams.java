package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPipelineVariablesForWorkspacePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=workspace")
    public String workspace;
    public GetPipelineVariablesForWorkspacePathParams withWorkspace(String workspace) {
        this.workspace = workspace;
        return this;
    }
}