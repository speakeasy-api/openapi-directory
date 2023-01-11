package openapisdk.models.operations;



public class ReactionsCreateForIssueCommentResponse {
    public String contentType;
    public ReactionsCreateForIssueCommentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ReactionsCreateForIssueCommentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Reaction reaction;
    public ReactionsCreateForIssueCommentResponse withReaction(openapisdk.models.shared.Reaction reaction) {
        this.reaction = reaction;
        return this;
    }
    public ReactionsCreateForIssueComment415ApplicationJson reactionsCreateForIssueComment415ApplicationJSONObject;
    public ReactionsCreateForIssueCommentResponse withReactionsCreateForIssueComment415ApplicationJsonObject(ReactionsCreateForIssueComment415ApplicationJson reactionsCreateForIssueComment415ApplicationJSONObject) {
        this.reactionsCreateForIssueComment415ApplicationJSONObject = reactionsCreateForIssueComment415ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.ValidationError validationError;
    public ReactionsCreateForIssueCommentResponse withValidationError(openapisdk.models.shared.ValidationError validationError) {
        this.validationError = validationError;
        return this;
    }
}