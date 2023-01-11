package openapisdk.models.operations;



public class RemoveOrganizationUserRequest {
    public RemoveOrganizationUserPathParams pathParams;
    public RemoveOrganizationUserRequest withPathParams(RemoveOrganizationUserPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RemoveOrganizationUserQueryParams queryParams;
    public RemoveOrganizationUserRequest withQueryParams(RemoveOrganizationUserQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public RemoveOrganizationUserSecurity security;
    public RemoveOrganizationUserRequest withSecurity(RemoveOrganizationUserSecurity security) {
        this.security = security;
        return this;
    }
}