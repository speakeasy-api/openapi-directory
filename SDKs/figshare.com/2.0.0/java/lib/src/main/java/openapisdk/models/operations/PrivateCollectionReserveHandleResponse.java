package openapisdk.models.operations;



public class PrivateCollectionReserveHandleResponse {
    public openapisdk.models.shared.CollectionHandle collectionHandle;
    public PrivateCollectionReserveHandleResponse withCollectionHandle(openapisdk.models.shared.CollectionHandle collectionHandle) {
        this.collectionHandle = collectionHandle;
        return this;
    }
    public String contentType;
    public PrivateCollectionReserveHandleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorMessage errorMessage;
    public PrivateCollectionReserveHandleResponse withErrorMessage(openapisdk.models.shared.ErrorMessage errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
    public Long statusCode;
    public PrivateCollectionReserveHandleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}