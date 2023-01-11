package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TeamsAddOrUpdateProjectPermissionsInOrgRequest {
    public TeamsAddOrUpdateProjectPermissionsInOrgPathParams pathParams;
    public TeamsAddOrUpdateProjectPermissionsInOrgRequest withPathParams(TeamsAddOrUpdateProjectPermissionsInOrgPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public TeamsAddOrUpdateProjectPermissionsInOrgRequestBody request;
    public TeamsAddOrUpdateProjectPermissionsInOrgRequest withRequest(TeamsAddOrUpdateProjectPermissionsInOrgRequestBody request) {
        this.request = request;
        return this;
    }
}