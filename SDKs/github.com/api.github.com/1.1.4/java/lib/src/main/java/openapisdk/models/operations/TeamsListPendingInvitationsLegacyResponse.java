package openapisdk.models.operations;



public class TeamsListPendingInvitationsLegacyResponse {
    public String contentType;
    public TeamsListPendingInvitationsLegacyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public TeamsListPendingInvitationsLegacyResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public TeamsListPendingInvitationsLegacyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.OrganizationInvitation[] organizationInvitations;
    public TeamsListPendingInvitationsLegacyResponse withOrganizationInvitations(openapisdk.models.shared.OrganizationInvitation[] organizationInvitations) {
        this.organizationInvitations = organizationInvitations;
        return this;
    }
}