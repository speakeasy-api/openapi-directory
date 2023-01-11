package openapisdk.models.operations;



public class PrivateArticleUploadCompleteResponse {
    public String contentType;
    public PrivateArticleUploadCompleteResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorMessage errorMessage;
    public PrivateArticleUploadCompleteResponse withErrorMessage(openapisdk.models.shared.ErrorMessage errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
    public Long statusCode;
    public PrivateArticleUploadCompleteResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}