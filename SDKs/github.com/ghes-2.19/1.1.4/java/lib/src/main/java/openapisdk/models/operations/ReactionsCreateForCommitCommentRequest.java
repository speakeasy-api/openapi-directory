package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReactionsCreateForCommitCommentRequest {
    public ReactionsCreateForCommitCommentPathParams pathParams;
    public ReactionsCreateForCommitCommentRequest withPathParams(ReactionsCreateForCommitCommentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ReactionsCreateForCommitCommentRequestBody request;
    public ReactionsCreateForCommitCommentRequest withRequest(ReactionsCreateForCommitCommentRequestBody request) {
        this.request = request;
        return this;
    }
}