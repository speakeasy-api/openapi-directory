package openapisdk.models.operations;



public class PrivateCollectionsSearchResponse {
    public openapisdk.models.shared.Collection[] collections;
    public PrivateCollectionsSearchResponse withCollections(openapisdk.models.shared.Collection[] collections) {
        this.collections = collections;
        return this;
    }
    public String contentType;
    public PrivateCollectionsSearchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorMessage errorMessage;
    public PrivateCollectionsSearchResponse withErrorMessage(openapisdk.models.shared.ErrorMessage errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
    public Long statusCode;
    public PrivateCollectionsSearchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}