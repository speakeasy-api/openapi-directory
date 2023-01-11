package openapisdk.models.operations;



public class PrivateProjectArticlesListResponse {
    public openapisdk.models.shared.Article[] articles;
    public PrivateProjectArticlesListResponse withArticles(openapisdk.models.shared.Article[] articles) {
        this.articles = articles;
        return this;
    }
    public String contentType;
    public PrivateProjectArticlesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorMessage errorMessage;
    public PrivateProjectArticlesListResponse withErrorMessage(openapisdk.models.shared.ErrorMessage errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
    public Long statusCode;
    public PrivateProjectArticlesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}