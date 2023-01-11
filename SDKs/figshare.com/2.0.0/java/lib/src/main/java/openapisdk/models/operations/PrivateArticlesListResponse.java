package openapisdk.models.operations;



public class PrivateArticlesListResponse {
    public openapisdk.models.shared.Article[] articles;
    public PrivateArticlesListResponse withArticles(openapisdk.models.shared.Article[] articles) {
        this.articles = articles;
        return this;
    }
    public String contentType;
    public PrivateArticlesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorMessage errorMessage;
    public PrivateArticlesListResponse withErrorMessage(openapisdk.models.shared.ErrorMessage errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
    public Long statusCode;
    public PrivateArticlesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}