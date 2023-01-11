package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUsersSelectedUserSshKeysPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=selected_user")
    public String selectedUser;
    public PostUsersSelectedUserSshKeysPathParams withSelectedUser(String selectedUser) {
        this.selectedUser = selectedUser;
        return this;
    }
}