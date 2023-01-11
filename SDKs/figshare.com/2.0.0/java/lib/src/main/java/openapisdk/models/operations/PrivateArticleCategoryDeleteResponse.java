package openapisdk.models.operations;



public class PrivateArticleCategoryDeleteResponse {
    public String contentType;
    public PrivateArticleCategoryDeleteResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorMessage errorMessage;
    public PrivateArticleCategoryDeleteResponse withErrorMessage(openapisdk.models.shared.ErrorMessage errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
    public Long statusCode;
    public PrivateArticleCategoryDeleteResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}