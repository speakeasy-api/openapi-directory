package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TeamsCreateOrUpdateIdpGroupConnectionsInOrgRequest {
    public TeamsCreateOrUpdateIdpGroupConnectionsInOrgPathParams pathParams;
    public TeamsCreateOrUpdateIdpGroupConnectionsInOrgRequest withPathParams(TeamsCreateOrUpdateIdpGroupConnectionsInOrgPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public TeamsCreateOrUpdateIdpGroupConnectionsInOrgRequestBody request;
    public TeamsCreateOrUpdateIdpGroupConnectionsInOrgRequest withRequest(TeamsCreateOrUpdateIdpGroupConnectionsInOrgRequestBody request) {
        this.request = request;
        return this;
    }
}