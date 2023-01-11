package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TeamsCreateRequest {
    public TeamsCreatePathParams pathParams;
    public TeamsCreateRequest withPathParams(TeamsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public TeamsCreateRequestBody request;
    public TeamsCreateRequest withRequest(TeamsCreateRequestBody request) {
        this.request = request;
        return this;
    }
}