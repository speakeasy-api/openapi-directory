package openapisdk.models.operations;



public class ArticleVersionConfidentialityResponse {
    public openapisdk.models.shared.ArticleConfidentiality articleConfidentiality;
    public ArticleVersionConfidentialityResponse withArticleConfidentiality(openapisdk.models.shared.ArticleConfidentiality articleConfidentiality) {
        this.articleConfidentiality = articleConfidentiality;
        return this;
    }
    public String contentType;
    public ArticleVersionConfidentialityResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ArticleVersionConfidentialityResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}