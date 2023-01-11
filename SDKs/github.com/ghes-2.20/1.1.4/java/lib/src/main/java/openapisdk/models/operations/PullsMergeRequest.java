package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PullsMergeRequest {
    public PullsMergePathParams pathParams;
    public PullsMergeRequest withPathParams(PullsMergePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PullsMergeRequestBody request;
    public PullsMergeRequest withRequest(PullsMergeRequestBody request) {
        this.request = request;
        return this;
    }
}