package openapisdk.models.operations;



public class RemoveOrganizationUserResponse {
    public String contentType;
    public RemoveOrganizationUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FlatErrorResponse flatErrorResponse;
    public RemoveOrganizationUserResponse withFlatErrorResponse(openapisdk.models.shared.FlatErrorResponse flatErrorResponse) {
        this.flatErrorResponse = flatErrorResponse;
        return this;
    }
    public Long statusCode;
    public RemoveOrganizationUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}