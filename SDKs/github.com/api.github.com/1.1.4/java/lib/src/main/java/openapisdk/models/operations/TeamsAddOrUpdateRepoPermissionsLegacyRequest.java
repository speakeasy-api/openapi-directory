package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TeamsAddOrUpdateRepoPermissionsLegacyRequest {
    public TeamsAddOrUpdateRepoPermissionsLegacyPathParams pathParams;
    public TeamsAddOrUpdateRepoPermissionsLegacyRequest withPathParams(TeamsAddOrUpdateRepoPermissionsLegacyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public TeamsAddOrUpdateRepoPermissionsLegacyRequestBody request;
    public TeamsAddOrUpdateRepoPermissionsLegacyRequest withRequest(TeamsAddOrUpdateRepoPermissionsLegacyRequestBody request) {
        this.request = request;
        return this;
    }
}