package openapisdk.models.operations;



public class ReposCompareCommitsResponse {
    public String contentType;
    public ReposCompareCommitsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ReposCompareCommitsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public ReposCompareCommitsResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.CommitComparison commitComparison;
    public ReposCompareCommitsResponse withCommitComparison(openapisdk.models.shared.CommitComparison commitComparison) {
        this.commitComparison = commitComparison;
        return this;
    }
}