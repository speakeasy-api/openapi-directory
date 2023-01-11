package openapisdk.models.operations;



public class InstitutionArticlesResponse {
    public openapisdk.models.shared.Article[] articles;
    public InstitutionArticlesResponse withArticles(openapisdk.models.shared.Article[] articles) {
        this.articles = articles;
        return this;
    }
    public String contentType;
    public InstitutionArticlesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public InstitutionArticlesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}