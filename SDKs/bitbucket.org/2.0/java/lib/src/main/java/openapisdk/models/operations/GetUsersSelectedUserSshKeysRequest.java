package openapisdk.models.operations;



public class GetUsersSelectedUserSshKeysRequest {
    public GetUsersSelectedUserSshKeysPathParams pathParams;
    public GetUsersSelectedUserSshKeysRequest withPathParams(GetUsersSelectedUserSshKeysPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetUsersSelectedUserSshKeysSecurity security;
    public GetUsersSelectedUserSshKeysRequest withSecurity(GetUsersSelectedUserSshKeysSecurity security) {
        this.security = security;
        return this;
    }
}