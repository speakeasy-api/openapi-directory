package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeletePipelineVariableForWorkspacePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=variable_uuid")
    public String variableUuid;
    public DeletePipelineVariableForWorkspacePathParams withVariableUuid(String variableUuid) {
        this.variableUuid = variableUuid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=workspace")
    public String workspace;
    public DeletePipelineVariableForWorkspacePathParams withWorkspace(String workspace) {
        this.workspace = workspace;
        return this;
    }
}