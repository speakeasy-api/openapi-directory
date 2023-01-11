package openapisdk.models.operations;



public class ReactionsListForIssueCommentResponse {
    public String contentType;
    public ReactionsListForIssueCommentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ReactionsListForIssueCommentResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public ReactionsListForIssueCommentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public ReactionsListForIssueCommentResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.Reaction[] reactions;
    public ReactionsListForIssueCommentResponse withReactions(openapisdk.models.shared.Reaction[] reactions) {
        this.reactions = reactions;
        return this;
    }
    public ReactionsListForIssueComment415ApplicationJson reactionsListForIssueComment415ApplicationJSONObject;
    public ReactionsListForIssueCommentResponse withReactionsListForIssueComment415ApplicationJsonObject(ReactionsListForIssueComment415ApplicationJson reactionsListForIssueComment415ApplicationJSONObject) {
        this.reactionsListForIssueComment415ApplicationJSONObject = reactionsListForIssueComment415ApplicationJSONObject;
        return this;
    }
}