package openapisdk.models.operations;



public class ReposCreateOrUpdateFileContentsResponse {
    public String contentType;
    public ReposCreateOrUpdateFileContentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ReposCreateOrUpdateFileContentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public ReposCreateOrUpdateFileContentsResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.FileCommit fileCommit;
    public ReposCreateOrUpdateFileContentsResponse withFileCommit(openapisdk.models.shared.FileCommit fileCommit) {
        this.fileCommit = fileCommit;
        return this;
    }
    public openapisdk.models.shared.ValidationError validationError;
    public ReposCreateOrUpdateFileContentsResponse withValidationError(openapisdk.models.shared.ValidationError validationError) {
        this.validationError = validationError;
        return this;
    }
}