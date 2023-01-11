package openapisdk.models.operations;



public class PrivateArticleEmbargoDetailsResponse {
    public openapisdk.models.shared.ArticleEmbargo articleEmbargo;
    public PrivateArticleEmbargoDetailsResponse withArticleEmbargo(openapisdk.models.shared.ArticleEmbargo articleEmbargo) {
        this.articleEmbargo = articleEmbargo;
        return this;
    }
    public String contentType;
    public PrivateArticleEmbargoDetailsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorMessage errorMessage;
    public PrivateArticleEmbargoDetailsResponse withErrorMessage(openapisdk.models.shared.ErrorMessage errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
    public Long statusCode;
    public PrivateArticleEmbargoDetailsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}