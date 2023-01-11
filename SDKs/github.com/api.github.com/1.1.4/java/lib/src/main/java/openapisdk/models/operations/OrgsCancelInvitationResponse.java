package openapisdk.models.operations;



public class OrgsCancelInvitationResponse {
    public String contentType;
    public OrgsCancelInvitationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public OrgsCancelInvitationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public OrgsCancelInvitationResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.ValidationError validationError;
    public OrgsCancelInvitationResponse withValidationError(openapisdk.models.shared.ValidationError validationError) {
        this.validationError = validationError;
        return this;
    }
}