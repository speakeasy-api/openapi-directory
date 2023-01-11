package openapisdk.models.operations;



public class ArticleVersionsResponse {
    public openapisdk.models.shared.ArticleVersions[] articleVersions;
    public ArticleVersionsResponse withArticleVersions(openapisdk.models.shared.ArticleVersions[] articleVersions) {
        this.articleVersions = articleVersions;
        return this;
    }
    public String contentType;
    public ArticleVersionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ArticleVersionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}