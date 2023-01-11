package openapisdk.models.operations;



public class ReactionsCreateForIssueResponse {
    public String contentType;
    public ReactionsCreateForIssueResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ReactionsCreateForIssueResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Reaction reaction;
    public ReactionsCreateForIssueResponse withReaction(openapisdk.models.shared.Reaction reaction) {
        this.reaction = reaction;
        return this;
    }
    public ReactionsCreateForIssue415ApplicationJson reactionsCreateForIssue415ApplicationJSONObject;
    public ReactionsCreateForIssueResponse withReactionsCreateForIssue415ApplicationJsonObject(ReactionsCreateForIssue415ApplicationJson reactionsCreateForIssue415ApplicationJSONObject) {
        this.reactionsCreateForIssue415ApplicationJSONObject = reactionsCreateForIssue415ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.ValidationError validationError;
    public ReactionsCreateForIssueResponse withValidationError(openapisdk.models.shared.ValidationError validationError) {
        this.validationError = validationError;
        return this;
    }
}