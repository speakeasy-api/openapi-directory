package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteUsersSelectedUserSshKeysKeyIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=key_id")
    public String keyId;
    public DeleteUsersSelectedUserSshKeysKeyIdPathParams withKeyId(String keyId) {
        this.keyId = keyId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=selected_user")
    public String selectedUser;
    public DeleteUsersSelectedUserSshKeysKeyIdPathParams withSelectedUser(String selectedUser) {
        this.selectedUser = selectedUser;
        return this;
    }
}