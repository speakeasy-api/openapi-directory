package openapisdk.models.operations;



public class ReposDeleteCommitSignatureProtectionResponse {
    public String contentType;
    public ReposDeleteCommitSignatureProtectionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ReposDeleteCommitSignatureProtectionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public ReposDeleteCommitSignatureProtectionResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
}