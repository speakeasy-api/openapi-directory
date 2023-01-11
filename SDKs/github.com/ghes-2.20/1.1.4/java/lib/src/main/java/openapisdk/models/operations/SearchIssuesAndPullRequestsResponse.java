package openapisdk.models.operations;



public class SearchIssuesAndPullRequestsResponse {
    public String contentType;
    public SearchIssuesAndPullRequestsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public SearchIssuesAndPullRequestsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public SearchIssuesAndPullRequestsResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public SearchIssuesAndPullRequests200ApplicationJson searchIssuesAndPullRequests200ApplicationJSONObject;
    public SearchIssuesAndPullRequestsResponse withSearchIssuesAndPullRequests200ApplicationJsonObject(SearchIssuesAndPullRequests200ApplicationJson searchIssuesAndPullRequests200ApplicationJSONObject) {
        this.searchIssuesAndPullRequests200ApplicationJSONObject = searchIssuesAndPullRequests200ApplicationJSONObject;
        return this;
    }
    public SearchIssuesAndPullRequests503ApplicationJson searchIssuesAndPullRequests503ApplicationJSONObject;
    public SearchIssuesAndPullRequestsResponse withSearchIssuesAndPullRequests503ApplicationJsonObject(SearchIssuesAndPullRequests503ApplicationJson searchIssuesAndPullRequests503ApplicationJSONObject) {
        this.searchIssuesAndPullRequests503ApplicationJSONObject = searchIssuesAndPullRequests503ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.ValidationError validationError;
    public SearchIssuesAndPullRequestsResponse withValidationError(openapisdk.models.shared.ValidationError validationError) {
        this.validationError = validationError;
        return this;
    }
}