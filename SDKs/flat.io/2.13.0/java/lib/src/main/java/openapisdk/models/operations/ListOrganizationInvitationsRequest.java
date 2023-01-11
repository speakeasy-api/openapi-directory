package openapisdk.models.operations;



public class ListOrganizationInvitationsRequest {
    public ListOrganizationInvitationsQueryParams queryParams;
    public ListOrganizationInvitationsRequest withQueryParams(ListOrganizationInvitationsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListOrganizationInvitationsSecurity security;
    public ListOrganizationInvitationsRequest withSecurity(ListOrganizationInvitationsSecurity security) {
        this.security = security;
        return this;
    }
}