package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdatePipelineVariableForWorkspacePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=variable_uuid")
    public String variableUuid;
    public UpdatePipelineVariableForWorkspacePathParams withVariableUuid(String variableUuid) {
        this.variableUuid = variableUuid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=workspace")
    public String workspace;
    public UpdatePipelineVariableForWorkspacePathParams withWorkspace(String workspace) {
        this.workspace = workspace;
        return this;
    }
}