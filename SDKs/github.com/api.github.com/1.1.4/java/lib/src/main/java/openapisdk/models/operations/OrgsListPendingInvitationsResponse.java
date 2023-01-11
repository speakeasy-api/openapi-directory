package openapisdk.models.operations;



public class OrgsListPendingInvitationsResponse {
    public String contentType;
    public OrgsListPendingInvitationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public OrgsListPendingInvitationsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public OrgsListPendingInvitationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public OrgsListPendingInvitationsResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.OrganizationInvitation[] organizationInvitations;
    public OrgsListPendingInvitationsResponse withOrganizationInvitations(openapisdk.models.shared.OrganizationInvitation[] organizationInvitations) {
        this.organizationInvitations = organizationInvitations;
        return this;
    }
}