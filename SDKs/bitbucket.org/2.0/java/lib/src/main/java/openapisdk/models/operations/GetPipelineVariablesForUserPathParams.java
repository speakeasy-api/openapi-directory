package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPipelineVariablesForUserPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=selected_user")
    public String selectedUser;
    public GetPipelineVariablesForUserPathParams withSelectedUser(String selectedUser) {
        this.selectedUser = selectedUser;
        return this;
    }
}