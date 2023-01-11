package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreatePipelineVariableForTeamQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=workspace")
    public String workspace;
    public CreatePipelineVariableForTeamQueryParams withWorkspace(String workspace) {
        this.workspace = workspace;
        return this;
    }
}