package openapisdk.models.operations;



public class ReposDeletePullRequestReviewProtectionResponse {
    public String contentType;
    public ReposDeletePullRequestReviewProtectionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ReposDeletePullRequestReviewProtectionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public ReposDeletePullRequestReviewProtectionResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
}