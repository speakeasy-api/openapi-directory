package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPipelineVariablesForTeamQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=workspace")
    public String workspace;
    public GetPipelineVariablesForTeamQueryParams withWorkspace(String workspace) {
        this.workspace = workspace;
        return this;
    }
}