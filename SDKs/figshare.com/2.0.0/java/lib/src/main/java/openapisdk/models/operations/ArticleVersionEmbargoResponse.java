package openapisdk.models.operations;



public class ArticleVersionEmbargoResponse {
    public openapisdk.models.shared.ArticleEmbargo articleEmbargo;
    public ArticleVersionEmbargoResponse withArticleEmbargo(openapisdk.models.shared.ArticleEmbargo articleEmbargo) {
        this.articleEmbargo = articleEmbargo;
        return this;
    }
    public String contentType;
    public ArticleVersionEmbargoResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ArticleVersionEmbargoResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}