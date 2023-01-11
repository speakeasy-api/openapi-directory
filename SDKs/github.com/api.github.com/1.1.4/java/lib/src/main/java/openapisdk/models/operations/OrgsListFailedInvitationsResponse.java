package openapisdk.models.operations;



public class OrgsListFailedInvitationsResponse {
    public String contentType;
    public OrgsListFailedInvitationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public OrgsListFailedInvitationsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public OrgsListFailedInvitationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public OrgsListFailedInvitationsResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.OrganizationInvitation[] organizationInvitations;
    public OrgsListFailedInvitationsResponse withOrganizationInvitations(openapisdk.models.shared.OrganizationInvitation[] organizationInvitations) {
        this.organizationInvitations = organizationInvitations;
        return this;
    }
}