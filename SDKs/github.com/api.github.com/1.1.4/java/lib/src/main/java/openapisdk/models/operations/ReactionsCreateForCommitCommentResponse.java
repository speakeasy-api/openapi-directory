package openapisdk.models.operations;



public class ReactionsCreateForCommitCommentResponse {
    public String contentType;
    public ReactionsCreateForCommitCommentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ReactionsCreateForCommitCommentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Reaction reaction;
    public ReactionsCreateForCommitCommentResponse withReaction(openapisdk.models.shared.Reaction reaction) {
        this.reaction = reaction;
        return this;
    }
    public ReactionsCreateForCommitComment415ApplicationJson reactionsCreateForCommitComment415ApplicationJSONObject;
    public ReactionsCreateForCommitCommentResponse withReactionsCreateForCommitComment415ApplicationJsonObject(ReactionsCreateForCommitComment415ApplicationJson reactionsCreateForCommitComment415ApplicationJSONObject) {
        this.reactionsCreateForCommitComment415ApplicationJSONObject = reactionsCreateForCommitComment415ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.ValidationError validationError;
    public ReactionsCreateForCommitCommentResponse withValidationError(openapisdk.models.shared.ValidationError validationError) {
        this.validationError = validationError;
        return this;
    }
}