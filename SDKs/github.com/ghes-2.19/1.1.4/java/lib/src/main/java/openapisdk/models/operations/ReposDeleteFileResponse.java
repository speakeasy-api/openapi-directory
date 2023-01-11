package openapisdk.models.operations;



public class ReposDeleteFileResponse {
    public String contentType;
    public ReposDeleteFileResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ReposDeleteFileResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public ReposDeleteFileResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.FileCommit fileCommit;
    public ReposDeleteFileResponse withFileCommit(openapisdk.models.shared.FileCommit fileCommit) {
        this.fileCommit = fileCommit;
        return this;
    }
    public ReposDeleteFile503ApplicationJson reposDeleteFile503ApplicationJSONObject;
    public ReposDeleteFileResponse withReposDeleteFile503ApplicationJsonObject(ReposDeleteFile503ApplicationJson reposDeleteFile503ApplicationJSONObject) {
        this.reposDeleteFile503ApplicationJSONObject = reposDeleteFile503ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.ValidationError validationError;
    public ReposDeleteFileResponse withValidationError(openapisdk.models.shared.ValidationError validationError) {
        this.validationError = validationError;
        return this;
    }
}