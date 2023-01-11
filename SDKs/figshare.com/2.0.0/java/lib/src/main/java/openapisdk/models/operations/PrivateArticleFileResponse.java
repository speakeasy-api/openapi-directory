package openapisdk.models.operations;



public class PrivateArticleFileResponse {
    public String contentType;
    public PrivateArticleFileResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorMessage errorMessage;
    public PrivateArticleFileResponse withErrorMessage(openapisdk.models.shared.ErrorMessage errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
    public openapisdk.models.shared.PrivateFile privateFile;
    public PrivateArticleFileResponse withPrivateFile(openapisdk.models.shared.PrivateFile privateFile) {
        this.privateFile = privateFile;
        return this;
    }
    public Long statusCode;
    public PrivateArticleFileResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}