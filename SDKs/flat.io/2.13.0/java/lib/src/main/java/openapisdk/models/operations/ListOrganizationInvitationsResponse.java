package openapisdk.models.operations;



public class ListOrganizationInvitationsResponse {
    public String contentType;
    public ListOrganizationInvitationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FlatErrorResponse flatErrorResponse;
    public ListOrganizationInvitationsResponse withFlatErrorResponse(openapisdk.models.shared.FlatErrorResponse flatErrorResponse) {
        this.flatErrorResponse = flatErrorResponse;
        return this;
    }
    public openapisdk.models.shared.OrganizationInvitation[] organizationInvitations;
    public ListOrganizationInvitationsResponse withOrganizationInvitations(openapisdk.models.shared.OrganizationInvitation[] organizationInvitations) {
        this.organizationInvitations = organizationInvitations;
        return this;
    }
    public Long statusCode;
    public ListOrganizationInvitationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}