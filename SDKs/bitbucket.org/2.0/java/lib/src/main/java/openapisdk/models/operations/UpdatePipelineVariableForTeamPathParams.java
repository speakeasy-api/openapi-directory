package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdatePipelineVariableForTeamPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=username")
    public String username;
    public UpdatePipelineVariableForTeamPathParams withUsername(String username) {
        this.username = username;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=variable_uuid")
    public String variableUuid;
    public UpdatePipelineVariableForTeamPathParams withVariableUuid(String variableUuid) {
        this.variableUuid = variableUuid;
        return this;
    }
}