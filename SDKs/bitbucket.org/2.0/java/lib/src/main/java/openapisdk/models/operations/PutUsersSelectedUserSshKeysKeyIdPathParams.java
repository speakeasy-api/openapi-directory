package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutUsersSelectedUserSshKeysKeyIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=key_id")
    public String keyId;
    public PutUsersSelectedUserSshKeysKeyIdPathParams withKeyId(String keyId) {
        this.keyId = keyId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=selected_user")
    public String selectedUser;
    public PutUsersSelectedUserSshKeysKeyIdPathParams withSelectedUser(String selectedUser) {
        this.selectedUser = selectedUser;
        return this;
    }
}