package openapisdk.models.operations;



public class PrivateProjectArticleFilesResponse {
    public String contentType;
    public PrivateProjectArticleFilesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorMessage errorMessage;
    public PrivateProjectArticleFilesResponse withErrorMessage(openapisdk.models.shared.ErrorMessage errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
    public openapisdk.models.shared.PrivateFile[] privateFiles;
    public PrivateProjectArticleFilesResponse withPrivateFiles(openapisdk.models.shared.PrivateFile[] privateFiles) {
        this.privateFiles = privateFiles;
        return this;
    }
    public Long statusCode;
    public PrivateProjectArticleFilesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}