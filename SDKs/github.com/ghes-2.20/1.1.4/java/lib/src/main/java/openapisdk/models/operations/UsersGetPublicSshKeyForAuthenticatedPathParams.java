package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UsersGetPublicSshKeyForAuthenticatedPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=key_id")
    public Long keyId;
    public UsersGetPublicSshKeyForAuthenticatedPathParams withKeyId(Long keyId) {
        this.keyId = keyId;
        return this;
    }
}