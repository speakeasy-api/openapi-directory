package openapisdk.models.operations;



public class GitCreateBlobResponse {
    public String contentType;
    public GitCreateBlobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GitCreateBlobResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GitCreateBlobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public GitCreateBlobResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.ShortBlob shortBlob;
    public GitCreateBlobResponse withShortBlob(openapisdk.models.shared.ShortBlob shortBlob) {
        this.shortBlob = shortBlob;
        return this;
    }
    public openapisdk.models.shared.ValidationError validationError;
    public GitCreateBlobResponse withValidationError(openapisdk.models.shared.ValidationError validationError) {
        this.validationError = validationError;
        return this;
    }
}