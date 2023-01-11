package openapisdk.models.operations;



public class ProjectArticlesResponse {
    public openapisdk.models.shared.Article[] articles;
    public ProjectArticlesResponse withArticles(openapisdk.models.shared.Article[] articles) {
        this.articles = articles;
        return this;
    }
    public String contentType;
    public ProjectArticlesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ProjectArticlesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}