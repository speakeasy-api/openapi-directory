package openapisdk.models.operations;



public class AddClassUserRequest {
    public AddClassUserPathParams pathParams;
    public AddClassUserRequest withPathParams(AddClassUserPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AddClassUserSecurity security;
    public AddClassUserRequest withSecurity(AddClassUserSecurity security) {
        this.security = security;
        return this;
    }
}