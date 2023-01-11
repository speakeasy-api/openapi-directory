package openapisdk.models.operations;



public class PrivateArticleCategoriesAddResponse {
    public String contentType;
    public PrivateArticleCategoriesAddResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorMessage errorMessage;
    public PrivateArticleCategoriesAddResponse withErrorMessage(openapisdk.models.shared.ErrorMessage errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
    public Long statusCode;
    public PrivateArticleCategoriesAddResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}