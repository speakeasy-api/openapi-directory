package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUsersSelectedUserHooksUidPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=selected_user")
    public String selectedUser;
    public GetUsersSelectedUserHooksUidPathParams withSelectedUser(String selectedUser) {
        this.selectedUser = selectedUser;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=uid")
    public String uid;
    public GetUsersSelectedUserHooksUidPathParams withUid(String uid) {
        this.uid = uid;
        return this;
    }
}