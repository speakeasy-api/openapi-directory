package openapisdk.models.operations;



public class ArticleVersionDetailsResponse {
    public openapisdk.models.shared.ArticleComplete articleComplete;
    public ArticleVersionDetailsResponse withArticleComplete(openapisdk.models.shared.ArticleComplete articleComplete) {
        this.articleComplete = articleComplete;
        return this;
    }
    public String contentType;
    public ArticleVersionDetailsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ArticleVersionDetailsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}