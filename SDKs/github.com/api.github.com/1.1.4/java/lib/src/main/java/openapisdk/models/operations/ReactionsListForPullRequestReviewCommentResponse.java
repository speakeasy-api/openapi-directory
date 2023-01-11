package openapisdk.models.operations;



public class ReactionsListForPullRequestReviewCommentResponse {
    public String contentType;
    public ReactionsListForPullRequestReviewCommentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ReactionsListForPullRequestReviewCommentResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public ReactionsListForPullRequestReviewCommentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public ReactionsListForPullRequestReviewCommentResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.Reaction[] reactions;
    public ReactionsListForPullRequestReviewCommentResponse withReactions(openapisdk.models.shared.Reaction[] reactions) {
        this.reactions = reactions;
        return this;
    }
    public ReactionsListForPullRequestReviewComment415ApplicationJson reactionsListForPullRequestReviewComment415ApplicationJSONObject;
    public ReactionsListForPullRequestReviewCommentResponse withReactionsListForPullRequestReviewComment415ApplicationJsonObject(ReactionsListForPullRequestReviewComment415ApplicationJson reactionsListForPullRequestReviewComment415ApplicationJSONObject) {
        this.reactionsListForPullRequestReviewComment415ApplicationJSONObject = reactionsListForPullRequestReviewComment415ApplicationJSONObject;
        return this;
    }
}