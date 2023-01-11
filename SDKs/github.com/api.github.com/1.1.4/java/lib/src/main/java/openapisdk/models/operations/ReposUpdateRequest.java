package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReposUpdateRequest {
    public ReposUpdatePathParams pathParams;
    public ReposUpdateRequest withPathParams(ReposUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ReposUpdateRequestBody request;
    public ReposUpdateRequest withRequest(ReposUpdateRequestBody request) {
        this.request = request;
        return this;
    }
}