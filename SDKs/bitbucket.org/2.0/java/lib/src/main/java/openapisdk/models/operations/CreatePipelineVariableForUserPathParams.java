package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreatePipelineVariableForUserPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=selected_user")
    public String selectedUser;
    public CreatePipelineVariableForUserPathParams withSelectedUser(String selectedUser) {
        this.selectedUser = selectedUser;
        return this;
    }
}