package openapisdk.models.operations;



public class RemoveOrganizationInvitationResponse {
    public String contentType;
    public RemoveOrganizationInvitationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FlatErrorResponse flatErrorResponse;
    public RemoveOrganizationInvitationResponse withFlatErrorResponse(openapisdk.models.shared.FlatErrorResponse flatErrorResponse) {
        this.flatErrorResponse = flatErrorResponse;
        return this;
    }
    public Long statusCode;
    public RemoveOrganizationInvitationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}