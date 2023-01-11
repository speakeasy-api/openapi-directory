package openapisdk.models.operations;



public class PrivateArticlesSearchResponse {
    public openapisdk.models.shared.Article[] articles;
    public PrivateArticlesSearchResponse withArticles(openapisdk.models.shared.Article[] articles) {
        this.articles = articles;
        return this;
    }
    public String contentType;
    public PrivateArticlesSearchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorMessage errorMessage;
    public PrivateArticlesSearchResponse withErrorMessage(openapisdk.models.shared.ErrorMessage errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
    public Long statusCode;
    public PrivateArticlesSearchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}