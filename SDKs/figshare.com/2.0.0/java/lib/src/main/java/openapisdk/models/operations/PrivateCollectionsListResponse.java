package openapisdk.models.operations;



public class PrivateCollectionsListResponse {
    public openapisdk.models.shared.Collection[] collections;
    public PrivateCollectionsListResponse withCollections(openapisdk.models.shared.Collection[] collections) {
        this.collections = collections;
        return this;
    }
    public String contentType;
    public PrivateCollectionsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorMessage errorMessage;
    public PrivateCollectionsListResponse withErrorMessage(openapisdk.models.shared.ErrorMessage errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
    public Long statusCode;
    public PrivateCollectionsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}