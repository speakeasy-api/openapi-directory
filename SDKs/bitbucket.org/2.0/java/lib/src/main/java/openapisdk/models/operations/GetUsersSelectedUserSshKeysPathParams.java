package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUsersSelectedUserSshKeysPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=selected_user")
    public String selectedUser;
    public GetUsersSelectedUserSshKeysPathParams withSelectedUser(String selectedUser) {
        this.selectedUser = selectedUser;
        return this;
    }
}