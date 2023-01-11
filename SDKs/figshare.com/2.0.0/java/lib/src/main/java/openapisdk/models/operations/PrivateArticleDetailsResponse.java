package openapisdk.models.operations;



public class PrivateArticleDetailsResponse {
    public openapisdk.models.shared.ArticleCompletePrivate articleCompletePrivate;
    public PrivateArticleDetailsResponse withArticleCompletePrivate(openapisdk.models.shared.ArticleCompletePrivate articleCompletePrivate) {
        this.articleCompletePrivate = articleCompletePrivate;
        return this;
    }
    public String contentType;
    public PrivateArticleDetailsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorMessage errorMessage;
    public PrivateArticleDetailsResponse withErrorMessage(openapisdk.models.shared.ErrorMessage errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
    public Long statusCode;
    public PrivateArticleDetailsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}