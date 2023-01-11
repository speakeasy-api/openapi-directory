package openapisdk.models.operations;



public class PrivateProjectCollaboratorsInviteResponse {
    public String contentType;
    public PrivateProjectCollaboratorsInviteResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorMessage errorMessage;
    public PrivateProjectCollaboratorsInviteResponse withErrorMessage(openapisdk.models.shared.ErrorMessage errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
    public openapisdk.models.shared.ResponseMessage responseMessage;
    public PrivateProjectCollaboratorsInviteResponse withResponseMessage(openapisdk.models.shared.ResponseMessage responseMessage) {
        this.responseMessage = responseMessage;
        return this;
    }
    public Long statusCode;
    public PrivateProjectCollaboratorsInviteResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}