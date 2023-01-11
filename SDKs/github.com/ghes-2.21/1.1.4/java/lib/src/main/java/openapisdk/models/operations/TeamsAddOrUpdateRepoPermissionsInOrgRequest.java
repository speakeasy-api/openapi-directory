package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TeamsAddOrUpdateRepoPermissionsInOrgRequest {
    public TeamsAddOrUpdateRepoPermissionsInOrgPathParams pathParams;
    public TeamsAddOrUpdateRepoPermissionsInOrgRequest withPathParams(TeamsAddOrUpdateRepoPermissionsInOrgPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public TeamsAddOrUpdateRepoPermissionsInOrgRequestBody request;
    public TeamsAddOrUpdateRepoPermissionsInOrgRequest withRequest(TeamsAddOrUpdateRepoPermissionsInOrgRequestBody request) {
        this.request = request;
        return this;
    }
}