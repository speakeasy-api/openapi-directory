package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPipelineVariableForWorkspacePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=variable_uuid")
    public String variableUuid;
    public GetPipelineVariableForWorkspacePathParams withVariableUuid(String variableUuid) {
        this.variableUuid = variableUuid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=workspace")
    public String workspace;
    public GetPipelineVariableForWorkspacePathParams withWorkspace(String workspace) {
        this.workspace = workspace;
        return this;
    }
}