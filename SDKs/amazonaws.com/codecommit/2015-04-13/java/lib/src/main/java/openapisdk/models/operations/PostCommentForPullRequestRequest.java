package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCommentForPullRequestRequest {
    public PostCommentForPullRequestHeaders headers;
    public PostCommentForPullRequestRequest withHeaders(PostCommentForPullRequestHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PostCommentForPullRequestInput request;
    public PostCommentForPullRequestRequest withRequest(openapisdk.models.shared.PostCommentForPullRequestInput request) {
        this.request = request;
        return this;
    }
}