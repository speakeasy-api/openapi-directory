package openapisdk.models.operations;



public class ArticleDetailsResponse {
    public openapisdk.models.shared.ArticleComplete articleComplete;
    public ArticleDetailsResponse withArticleComplete(openapisdk.models.shared.ArticleComplete articleComplete) {
        this.articleComplete = articleComplete;
        return this;
    }
    public String contentType;
    public ArticleDetailsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ArticleDetailsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}