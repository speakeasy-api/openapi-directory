package openapisdk.models.operations;



public class PrivateArticlePrivateLinkResponse {
    public String contentType;
    public PrivateArticlePrivateLinkResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorMessage errorMessage;
    public PrivateArticlePrivateLinkResponse withErrorMessage(openapisdk.models.shared.ErrorMessage errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
    public openapisdk.models.shared.PrivateLink[] privateLinks;
    public PrivateArticlePrivateLinkResponse withPrivateLinks(openapisdk.models.shared.PrivateLink[] privateLinks) {
        this.privateLinks = privateLinks;
        return this;
    }
    public Long statusCode;
    public PrivateArticlePrivateLinkResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}