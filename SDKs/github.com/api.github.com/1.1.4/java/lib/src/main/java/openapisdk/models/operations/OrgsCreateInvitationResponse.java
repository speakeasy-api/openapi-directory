package openapisdk.models.operations;



public class OrgsCreateInvitationResponse {
    public String contentType;
    public OrgsCreateInvitationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public OrgsCreateInvitationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public OrgsCreateInvitationResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.OrganizationInvitation organizationInvitation;
    public OrgsCreateInvitationResponse withOrganizationInvitation(openapisdk.models.shared.OrganizationInvitation organizationInvitation) {
        this.organizationInvitation = organizationInvitation;
        return this;
    }
    public openapisdk.models.shared.ValidationError validationError;
    public OrgsCreateInvitationResponse withValidationError(openapisdk.models.shared.ValidationError validationError) {
        this.validationError = validationError;
        return this;
    }
}