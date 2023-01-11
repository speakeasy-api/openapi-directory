package openapisdk.models.operations;



public class PrivateCollectionPrivateLinkDeleteResponse {
    public String contentType;
    public PrivateCollectionPrivateLinkDeleteResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorMessage errorMessage;
    public PrivateCollectionPrivateLinkDeleteResponse withErrorMessage(openapisdk.models.shared.ErrorMessage errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
    public Long statusCode;
    public PrivateCollectionPrivateLinkDeleteResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}