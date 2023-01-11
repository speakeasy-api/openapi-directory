package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReposUpdateCommitCommentRequest {
    public ReposUpdateCommitCommentPathParams pathParams;
    public ReposUpdateCommitCommentRequest withPathParams(ReposUpdateCommitCommentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ReposUpdateCommitCommentRequestBody request;
    public ReposUpdateCommitCommentRequest withRequest(ReposUpdateCommitCommentRequestBody request) {
        this.request = request;
        return this;
    }
}