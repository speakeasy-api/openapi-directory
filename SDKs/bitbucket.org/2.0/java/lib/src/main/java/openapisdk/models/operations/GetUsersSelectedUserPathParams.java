package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUsersSelectedUserPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=selected_user")
    public String selectedUser;
    public GetUsersSelectedUserPathParams withSelectedUser(String selectedUser) {
        this.selectedUser = selectedUser;
        return this;
    }
}