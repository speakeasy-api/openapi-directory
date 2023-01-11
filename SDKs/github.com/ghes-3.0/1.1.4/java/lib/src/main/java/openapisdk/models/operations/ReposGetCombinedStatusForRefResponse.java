package openapisdk.models.operations;



public class ReposGetCombinedStatusForRefResponse {
    public String contentType;
    public ReposGetCombinedStatusForRefResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ReposGetCombinedStatusForRefResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public ReposGetCombinedStatusForRefResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.CombinedCommitStatus combinedCommitStatus;
    public ReposGetCombinedStatusForRefResponse withCombinedCommitStatus(openapisdk.models.shared.CombinedCommitStatus combinedCommitStatus) {
        this.combinedCommitStatus = combinedCommitStatus;
        return this;
    }
}