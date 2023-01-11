package openapisdk.models.operations;



public class TeamsListPendingInvitationsInOrgResponse {
    public String contentType;
    public TeamsListPendingInvitationsInOrgResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public TeamsListPendingInvitationsInOrgResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public TeamsListPendingInvitationsInOrgResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.OrganizationInvitation[] organizationInvitations;
    public TeamsListPendingInvitationsInOrgResponse withOrganizationInvitations(openapisdk.models.shared.OrganizationInvitation[] organizationInvitations) {
        this.organizationInvitations = organizationInvitations;
        return this;
    }
}