package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutUsersSelectedUserSshKeysKeyIdRequest {
    public PutUsersSelectedUserSshKeysKeyIdPathParams pathParams;
    public PutUsersSelectedUserSshKeysKeyIdRequest withPathParams(PutUsersSelectedUserSshKeysKeyIdPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public PutUsersSelectedUserSshKeysKeyIdRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public PutUsersSelectedUserSshKeysKeyIdSecurity security;
    public PutUsersSelectedUserSshKeysKeyIdRequest withSecurity(PutUsersSelectedUserSshKeysKeyIdSecurity security) {
        this.security = security;
        return this;
    }
}