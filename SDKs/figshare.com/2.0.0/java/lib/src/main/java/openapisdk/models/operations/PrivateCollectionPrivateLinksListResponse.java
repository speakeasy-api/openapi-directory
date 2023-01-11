package openapisdk.models.operations;



public class PrivateCollectionPrivateLinksListResponse {
    public String contentType;
    public PrivateCollectionPrivateLinksListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorMessage errorMessage;
    public PrivateCollectionPrivateLinksListResponse withErrorMessage(openapisdk.models.shared.ErrorMessage errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
    public openapisdk.models.shared.PrivateLink[] privateLinks;
    public PrivateCollectionPrivateLinksListResponse withPrivateLinks(openapisdk.models.shared.PrivateLink[] privateLinks) {
        this.privateLinks = privateLinks;
        return this;
    }
    public Long statusCode;
    public PrivateCollectionPrivateLinksListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}