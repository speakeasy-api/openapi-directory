package openapisdk.models.operations;



public class ListOrganizationUsersRequest {
    public ListOrganizationUsersQueryParams queryParams;
    public ListOrganizationUsersRequest withQueryParams(ListOrganizationUsersQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListOrganizationUsersSecurity security;
    public ListOrganizationUsersRequest withSecurity(ListOrganizationUsersSecurity security) {
        this.security = security;
        return this;
    }
}