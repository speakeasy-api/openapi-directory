package openapisdk.models.operations;



public class PrivateArticleConfidentialityDetailsResponse {
    public openapisdk.models.shared.ArticleConfidentiality articleConfidentiality;
    public PrivateArticleConfidentialityDetailsResponse withArticleConfidentiality(openapisdk.models.shared.ArticleConfidentiality articleConfidentiality) {
        this.articleConfidentiality = articleConfidentiality;
        return this;
    }
    public String contentType;
    public PrivateArticleConfidentialityDetailsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorMessage errorMessage;
    public PrivateArticleConfidentialityDetailsResponse withErrorMessage(openapisdk.models.shared.ErrorMessage errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
    public Long statusCode;
    public PrivateArticleConfidentialityDetailsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}