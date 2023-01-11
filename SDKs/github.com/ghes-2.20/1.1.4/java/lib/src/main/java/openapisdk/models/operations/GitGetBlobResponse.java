package openapisdk.models.operations;



public class GitGetBlobResponse {
    public String contentType;
    public GitGetBlobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GitGetBlobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public GitGetBlobResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.Blob blob;
    public GitGetBlobResponse withBlob(openapisdk.models.shared.Blob blob) {
        this.blob = blob;
        return this;
    }
    public openapisdk.models.shared.ValidationError validationError;
    public GitGetBlobResponse withValidationError(openapisdk.models.shared.ValidationError validationError) {
        this.validationError = validationError;
        return this;
    }
}