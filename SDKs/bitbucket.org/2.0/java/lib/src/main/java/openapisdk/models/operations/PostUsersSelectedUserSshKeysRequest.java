package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUsersSelectedUserSshKeysRequest {
    public PostUsersSelectedUserSshKeysPathParams pathParams;
    public PostUsersSelectedUserSshKeysRequest withPathParams(PostUsersSelectedUserSshKeysPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public PostUsersSelectedUserSshKeysRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public PostUsersSelectedUserSshKeysSecurity security;
    public PostUsersSelectedUserSshKeysRequest withSecurity(PostUsersSelectedUserSshKeysSecurity security) {
        this.security = security;
        return this;
    }
}