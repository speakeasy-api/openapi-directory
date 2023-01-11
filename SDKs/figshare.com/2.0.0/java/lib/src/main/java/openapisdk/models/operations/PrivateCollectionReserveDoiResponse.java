package openapisdk.models.operations;



public class PrivateCollectionReserveDoiResponse {
    public openapisdk.models.shared.CollectionDoi collectionDOI;
    public PrivateCollectionReserveDoiResponse withCollectionDoi(openapisdk.models.shared.CollectionDoi collectionDOI) {
        this.collectionDOI = collectionDOI;
        return this;
    }
    public String contentType;
    public PrivateCollectionReserveDoiResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorMessage errorMessage;
    public PrivateCollectionReserveDoiResponse withErrorMessage(openapisdk.models.shared.ErrorMessage errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
    public Long statusCode;
    public PrivateCollectionReserveDoiResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}