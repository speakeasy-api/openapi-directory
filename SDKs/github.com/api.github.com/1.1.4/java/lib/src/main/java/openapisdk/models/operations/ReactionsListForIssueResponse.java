package openapisdk.models.operations;



public class ReactionsListForIssueResponse {
    public String contentType;
    public ReactionsListForIssueResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ReactionsListForIssueResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public ReactionsListForIssueResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public ReactionsListForIssueResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.Reaction[] reactions;
    public ReactionsListForIssueResponse withReactions(openapisdk.models.shared.Reaction[] reactions) {
        this.reactions = reactions;
        return this;
    }
    public ReactionsListForIssue415ApplicationJson reactionsListForIssue415ApplicationJSONObject;
    public ReactionsListForIssueResponse withReactionsListForIssue415ApplicationJsonObject(ReactionsListForIssue415ApplicationJson reactionsListForIssue415ApplicationJSONObject) {
        this.reactionsListForIssue415ApplicationJSONObject = reactionsListForIssue415ApplicationJSONObject;
        return this;
    }
}