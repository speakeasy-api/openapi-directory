package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReposCreateCommitCommentRequest {
    public ReposCreateCommitCommentPathParams pathParams;
    public ReposCreateCommitCommentRequest withPathParams(ReposCreateCommitCommentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ReposCreateCommitCommentRequestBody request;
    public ReposCreateCommitCommentRequest withRequest(ReposCreateCommitCommentRequestBody request) {
        this.request = request;
        return this;
    }
}