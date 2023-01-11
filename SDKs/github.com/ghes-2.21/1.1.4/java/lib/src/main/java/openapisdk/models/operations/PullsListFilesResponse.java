package openapisdk.models.operations;



public class PullsListFilesResponse {
    public String contentType;
    public PullsListFilesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PullsListFilesResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public PullsListFilesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public PullsListFilesResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.DiffEntry[] diffEntries;
    public PullsListFilesResponse withDiffEntries(openapisdk.models.shared.DiffEntry[] diffEntries) {
        this.diffEntries = diffEntries;
        return this;
    }
    public openapisdk.models.shared.ValidationError validationError;
    public PullsListFilesResponse withValidationError(openapisdk.models.shared.ValidationError validationError) {
        this.validationError = validationError;
        return this;
    }
}