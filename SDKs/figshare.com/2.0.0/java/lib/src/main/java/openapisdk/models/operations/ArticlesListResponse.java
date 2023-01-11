package openapisdk.models.operations;



public class ArticlesListResponse {
    public openapisdk.models.shared.Article[] articles;
    public ArticlesListResponse withArticles(openapisdk.models.shared.Article[] articles) {
        this.articles = articles;
        return this;
    }
    public String contentType;
    public ArticlesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ArticlesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}