package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPipelineVariableForUserPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=selected_user")
    public String selectedUser;
    public GetPipelineVariableForUserPathParams withSelectedUser(String selectedUser) {
        this.selectedUser = selectedUser;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=variable_uuid")
    public String variableUuid;
    public GetPipelineVariableForUserPathParams withVariableUuid(String variableUuid) {
        this.variableUuid = variableUuid;
        return this;
    }
}