package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPipelineVariablesForTeamPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=username")
    public String username;
    public GetPipelineVariablesForTeamPathParams withUsername(String username) {
        this.username = username;
        return this;
    }
}