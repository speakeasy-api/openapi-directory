package openapisdk.models.operations;



public class PrivateArticleReserveDoiResponse {
    public openapisdk.models.shared.ArticleDoi articleDOI;
    public PrivateArticleReserveDoiResponse withArticleDoi(openapisdk.models.shared.ArticleDoi articleDOI) {
        this.articleDOI = articleDOI;
        return this;
    }
    public String contentType;
    public PrivateArticleReserveDoiResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorMessage errorMessage;
    public PrivateArticleReserveDoiResponse withErrorMessage(openapisdk.models.shared.ErrorMessage errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
    public Long statusCode;
    public PrivateArticleReserveDoiResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}