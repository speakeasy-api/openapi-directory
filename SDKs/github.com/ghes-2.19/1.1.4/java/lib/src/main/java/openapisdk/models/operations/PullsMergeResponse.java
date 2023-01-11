package openapisdk.models.operations;



public class PullsMergeResponse {
    public String contentType;
    public PullsMergeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PullsMergeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public PullsMergeResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.PullRequestMergeResult pullRequestMergeResult;
    public PullsMergeResponse withPullRequestMergeResult(openapisdk.models.shared.PullRequestMergeResult pullRequestMergeResult) {
        this.pullRequestMergeResult = pullRequestMergeResult;
        return this;
    }
    public PullsMerge405ApplicationJson pullsMerge405ApplicationJSONObject;
    public PullsMergeResponse withPullsMerge405ApplicationJsonObject(PullsMerge405ApplicationJson pullsMerge405ApplicationJSONObject) {
        this.pullsMerge405ApplicationJSONObject = pullsMerge405ApplicationJSONObject;
        return this;
    }
    public PullsMerge409ApplicationJson pullsMerge409ApplicationJSONObject;
    public PullsMergeResponse withPullsMerge409ApplicationJsonObject(PullsMerge409ApplicationJson pullsMerge409ApplicationJSONObject) {
        this.pullsMerge409ApplicationJSONObject = pullsMerge409ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.ValidationError validationError;
    public PullsMergeResponse withValidationError(openapisdk.models.shared.ValidationError validationError) {
        this.validationError = validationError;
        return this;
    }
}