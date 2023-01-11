package openapisdk.models.operations;



public class PrivateProjectArticleDetailsResponse {
    public String contentType;
    public PrivateProjectArticleDetailsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorMessage errorMessage;
    public PrivateProjectArticleDetailsResponse withErrorMessage(openapisdk.models.shared.ErrorMessage errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
    public openapisdk.models.shared.ProjectArticle projectArticle;
    public PrivateProjectArticleDetailsResponse withProjectArticle(openapisdk.models.shared.ProjectArticle projectArticle) {
        this.projectArticle = projectArticle;
        return this;
    }
    public Long statusCode;
    public PrivateProjectArticleDetailsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}