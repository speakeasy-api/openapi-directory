package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReactionsCreateForIssueRequest {
    public ReactionsCreateForIssuePathParams pathParams;
    public ReactionsCreateForIssueRequest withPathParams(ReactionsCreateForIssuePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ReactionsCreateForIssueRequestBody request;
    public ReactionsCreateForIssueRequest withRequest(ReactionsCreateForIssueRequestBody request) {
        this.request = request;
        return this;
    }
}