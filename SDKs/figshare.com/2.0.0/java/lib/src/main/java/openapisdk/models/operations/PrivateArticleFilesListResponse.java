package openapisdk.models.operations;



public class PrivateArticleFilesListResponse {
    public String contentType;
    public PrivateArticleFilesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorMessage errorMessage;
    public PrivateArticleFilesListResponse withErrorMessage(openapisdk.models.shared.ErrorMessage errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
    public openapisdk.models.shared.PrivateFile[] privateFiles;
    public PrivateArticleFilesListResponse withPrivateFiles(openapisdk.models.shared.PrivateFile[] privateFiles) {
        this.privateFiles = privateFiles;
        return this;
    }
    public Long statusCode;
    public PrivateArticleFilesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}