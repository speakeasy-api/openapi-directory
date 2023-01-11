package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UsersDeletePublicSshKeyForAuthenticatedPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=key_id")
    public Long keyId;
    public UsersDeletePublicSshKeyForAuthenticatedPathParams withKeyId(Long keyId) {
        this.keyId = keyId;
        return this;
    }
}