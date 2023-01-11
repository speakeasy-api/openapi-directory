package openapisdk.models.operations;



public class PrivateCollectionArticlesListResponse {
    public openapisdk.models.shared.Article[] articles;
    public PrivateCollectionArticlesListResponse withArticles(openapisdk.models.shared.Article[] articles) {
        this.articles = articles;
        return this;
    }
    public String contentType;
    public PrivateCollectionArticlesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorMessage errorMessage;
    public PrivateCollectionArticlesListResponse withErrorMessage(openapisdk.models.shared.ErrorMessage errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
    public Long statusCode;
    public PrivateCollectionArticlesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}