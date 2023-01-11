package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TeamsUpdateInOrgRequest {
    public TeamsUpdateInOrgPathParams pathParams;
    public TeamsUpdateInOrgRequest withPathParams(TeamsUpdateInOrgPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public TeamsUpdateInOrgRequestBody request;
    public TeamsUpdateInOrgRequest withRequest(TeamsUpdateInOrgRequestBody request) {
        this.request = request;
        return this;
    }
}