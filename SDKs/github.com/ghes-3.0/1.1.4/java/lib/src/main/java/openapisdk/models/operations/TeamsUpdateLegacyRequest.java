package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TeamsUpdateLegacyRequest {
    public TeamsUpdateLegacyPathParams pathParams;
    public TeamsUpdateLegacyRequest withPathParams(TeamsUpdateLegacyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public TeamsUpdateLegacyRequestBody request;
    public TeamsUpdateLegacyRequest withRequest(TeamsUpdateLegacyRequestBody request) {
        this.request = request;
        return this;
    }
}