package openapisdk.models.operations;



public class CollectionArticlesResponse {
    public openapisdk.models.shared.Article[] articles;
    public CollectionArticlesResponse withArticles(openapisdk.models.shared.Article[] articles) {
        this.articles = articles;
        return this;
    }
    public String contentType;
    public CollectionArticlesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CollectionArticlesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}