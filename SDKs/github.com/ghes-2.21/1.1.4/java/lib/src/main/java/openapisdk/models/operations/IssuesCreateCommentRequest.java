package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IssuesCreateCommentRequest {
    public IssuesCreateCommentPathParams pathParams;
    public IssuesCreateCommentRequest withPathParams(IssuesCreateCommentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public IssuesCreateCommentRequestBody request;
    public IssuesCreateCommentRequest withRequest(IssuesCreateCommentRequestBody request) {
        this.request = request;
        return this;
    }
}