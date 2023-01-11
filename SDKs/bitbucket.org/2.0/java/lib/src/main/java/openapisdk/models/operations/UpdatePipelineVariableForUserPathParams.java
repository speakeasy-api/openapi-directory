package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdatePipelineVariableForUserPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=selected_user")
    public String selectedUser;
    public UpdatePipelineVariableForUserPathParams withSelectedUser(String selectedUser) {
        this.selectedUser = selectedUser;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=variable_uuid")
    public String variableUuid;
    public UpdatePipelineVariableForUserPathParams withVariableUuid(String variableUuid) {
        this.variableUuid = variableUuid;
        return this;
    }
}