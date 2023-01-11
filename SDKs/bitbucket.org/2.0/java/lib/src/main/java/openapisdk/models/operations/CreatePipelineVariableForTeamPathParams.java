package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreatePipelineVariableForTeamPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=username")
    public String username;
    public CreatePipelineVariableForTeamPathParams withUsername(String username) {
        this.username = username;
        return this;
    }
}