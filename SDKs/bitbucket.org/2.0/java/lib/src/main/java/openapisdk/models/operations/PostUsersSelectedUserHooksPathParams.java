package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUsersSelectedUserHooksPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=selected_user")
    public String selectedUser;
    public PostUsersSelectedUserHooksPathParams withSelectedUser(String selectedUser) {
        this.selectedUser = selectedUser;
        return this;
    }
}