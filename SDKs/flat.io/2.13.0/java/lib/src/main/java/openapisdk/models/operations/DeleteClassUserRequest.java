package openapisdk.models.operations;



public class DeleteClassUserRequest {
    public DeleteClassUserPathParams pathParams;
    public DeleteClassUserRequest withPathParams(DeleteClassUserPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteClassUserSecurity security;
    public DeleteClassUserRequest withSecurity(DeleteClassUserSecurity security) {
        this.security = security;
        return this;
    }
}