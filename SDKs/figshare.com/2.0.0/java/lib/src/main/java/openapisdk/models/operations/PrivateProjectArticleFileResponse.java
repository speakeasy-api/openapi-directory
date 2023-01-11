package openapisdk.models.operations;



public class PrivateProjectArticleFileResponse {
    public String contentType;
    public PrivateProjectArticleFileResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorMessage errorMessage;
    public PrivateProjectArticleFileResponse withErrorMessage(openapisdk.models.shared.ErrorMessage errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
    public openapisdk.models.shared.PrivateFile privateFile;
    public PrivateProjectArticleFileResponse withPrivateFile(openapisdk.models.shared.PrivateFile privateFile) {
        this.privateFile = privateFile;
        return this;
    }
    public Long statusCode;
    public PrivateProjectArticleFileResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}