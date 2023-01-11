package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TeamsCreateOrUpdateIdpGroupConnectionsLegacyRequest {
    public TeamsCreateOrUpdateIdpGroupConnectionsLegacyPathParams pathParams;
    public TeamsCreateOrUpdateIdpGroupConnectionsLegacyRequest withPathParams(TeamsCreateOrUpdateIdpGroupConnectionsLegacyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public TeamsCreateOrUpdateIdpGroupConnectionsLegacyRequestBody request;
    public TeamsCreateOrUpdateIdpGroupConnectionsLegacyRequest withRequest(TeamsCreateOrUpdateIdpGroupConnectionsLegacyRequestBody request) {
        this.request = request;
        return this;
    }
}