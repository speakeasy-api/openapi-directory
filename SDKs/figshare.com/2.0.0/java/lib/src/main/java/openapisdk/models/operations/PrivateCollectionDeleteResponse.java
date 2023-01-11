package openapisdk.models.operations;



public class PrivateCollectionDeleteResponse {
    public String contentType;
    public PrivateCollectionDeleteResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorMessage errorMessage;
    public PrivateCollectionDeleteResponse withErrorMessage(openapisdk.models.shared.ErrorMessage errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
    public Long statusCode;
    public PrivateCollectionDeleteResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}