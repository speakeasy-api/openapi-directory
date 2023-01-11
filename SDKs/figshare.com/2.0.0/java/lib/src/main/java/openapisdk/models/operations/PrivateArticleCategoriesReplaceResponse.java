package openapisdk.models.operations;



public class PrivateArticleCategoriesReplaceResponse {
    public String contentType;
    public PrivateArticleCategoriesReplaceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorMessage errorMessage;
    public PrivateArticleCategoriesReplaceResponse withErrorMessage(openapisdk.models.shared.ErrorMessage errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
    public Long statusCode;
    public PrivateArticleCategoriesReplaceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}