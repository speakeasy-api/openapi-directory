package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IssuesUpdateCommentRequest {
    public IssuesUpdateCommentPathParams pathParams;
    public IssuesUpdateCommentRequest withPathParams(IssuesUpdateCommentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public IssuesUpdateCommentRequestBody request;
    public IssuesUpdateCommentRequest withRequest(IssuesUpdateCommentRequestBody request) {
        this.request = request;
        return this;
    }
}