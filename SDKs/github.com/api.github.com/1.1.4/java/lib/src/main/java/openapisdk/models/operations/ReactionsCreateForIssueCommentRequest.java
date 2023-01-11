package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReactionsCreateForIssueCommentRequest {
    public ReactionsCreateForIssueCommentPathParams pathParams;
    public ReactionsCreateForIssueCommentRequest withPathParams(ReactionsCreateForIssueCommentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ReactionsCreateForIssueCommentRequestBody request;
    public ReactionsCreateForIssueCommentRequest withRequest(ReactionsCreateForIssueCommentRequestBody request) {
        this.request = request;
        return this;
    }
}