package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TeamsAddOrUpdateProjectPermissionsLegacyRequest {
    public TeamsAddOrUpdateProjectPermissionsLegacyPathParams pathParams;
    public TeamsAddOrUpdateProjectPermissionsLegacyRequest withPathParams(TeamsAddOrUpdateProjectPermissionsLegacyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public TeamsAddOrUpdateProjectPermissionsLegacyRequestBody request;
    public TeamsAddOrUpdateProjectPermissionsLegacyRequest withRequest(TeamsAddOrUpdateProjectPermissionsLegacyRequestBody request) {
        this.request = request;
        return this;
    }
}