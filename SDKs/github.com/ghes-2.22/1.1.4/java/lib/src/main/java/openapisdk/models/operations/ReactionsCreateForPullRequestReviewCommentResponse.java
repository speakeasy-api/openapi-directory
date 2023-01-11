package openapisdk.models.operations;



public class ReactionsCreateForPullRequestReviewCommentResponse {
    public String contentType;
    public ReactionsCreateForPullRequestReviewCommentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ReactionsCreateForPullRequestReviewCommentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Reaction reaction;
    public ReactionsCreateForPullRequestReviewCommentResponse withReaction(openapisdk.models.shared.Reaction reaction) {
        this.reaction = reaction;
        return this;
    }
    public ReactionsCreateForPullRequestReviewComment415ApplicationJson reactionsCreateForPullRequestReviewComment415ApplicationJSONObject;
    public ReactionsCreateForPullRequestReviewCommentResponse withReactionsCreateForPullRequestReviewComment415ApplicationJsonObject(ReactionsCreateForPullRequestReviewComment415ApplicationJson reactionsCreateForPullRequestReviewComment415ApplicationJSONObject) {
        this.reactionsCreateForPullRequestReviewComment415ApplicationJSONObject = reactionsCreateForPullRequestReviewComment415ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.ValidationError validationError;
    public ReactionsCreateForPullRequestReviewCommentResponse withValidationError(openapisdk.models.shared.ValidationError validationError) {
        this.validationError = validationError;
        return this;
    }
}