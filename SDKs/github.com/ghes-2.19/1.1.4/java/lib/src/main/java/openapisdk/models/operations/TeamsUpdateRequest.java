package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TeamsUpdateRequest {
    public TeamsUpdatePathParams pathParams;
    public TeamsUpdateRequest withPathParams(TeamsUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public TeamsUpdateRequestBody request;
    public TeamsUpdateRequest withRequest(TeamsUpdateRequestBody request) {
        this.request = request;
        return this;
    }
}