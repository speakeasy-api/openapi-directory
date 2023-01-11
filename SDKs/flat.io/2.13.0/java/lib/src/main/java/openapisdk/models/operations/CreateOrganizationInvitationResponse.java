package openapisdk.models.operations;



public class CreateOrganizationInvitationResponse {
    public String contentType;
    public CreateOrganizationInvitationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FlatErrorResponse flatErrorResponse;
    public CreateOrganizationInvitationResponse withFlatErrorResponse(openapisdk.models.shared.FlatErrorResponse flatErrorResponse) {
        this.flatErrorResponse = flatErrorResponse;
        return this;
    }
    public openapisdk.models.shared.OrganizationInvitation organizationInvitation;
    public CreateOrganizationInvitationResponse withOrganizationInvitation(openapisdk.models.shared.OrganizationInvitation organizationInvitation) {
        this.organizationInvitation = organizationInvitation;
        return this;
    }
    public Long statusCode;
    public CreateOrganizationInvitationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}