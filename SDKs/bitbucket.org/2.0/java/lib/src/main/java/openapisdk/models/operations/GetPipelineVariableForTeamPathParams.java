package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPipelineVariableForTeamPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=username")
    public String username;
    public GetPipelineVariableForTeamPathParams withUsername(String username) {
        this.username = username;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=variable_uuid")
    public String variableUuid;
    public GetPipelineVariableForTeamPathParams withVariableUuid(String variableUuid) {
        this.variableUuid = variableUuid;
        return this;
    }
}