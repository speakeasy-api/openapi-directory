package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PullsUpdateRequest {
    public PullsUpdatePathParams pathParams;
    public PullsUpdateRequest withPathParams(PullsUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PullsUpdateRequestBody request;
    public PullsUpdateRequest withRequest(PullsUpdateRequestBody request) {
        this.request = request;
        return this;
    }
}