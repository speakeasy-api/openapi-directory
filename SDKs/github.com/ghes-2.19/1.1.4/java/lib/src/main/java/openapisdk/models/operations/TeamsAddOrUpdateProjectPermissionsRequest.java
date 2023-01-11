package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TeamsAddOrUpdateProjectPermissionsRequest {
    public TeamsAddOrUpdateProjectPermissionsPathParams pathParams;
    public TeamsAddOrUpdateProjectPermissionsRequest withPathParams(TeamsAddOrUpdateProjectPermissionsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public TeamsAddOrUpdateProjectPermissionsHeaders headers;
    public TeamsAddOrUpdateProjectPermissionsRequest withHeaders(TeamsAddOrUpdateProjectPermissionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public TeamsAddOrUpdateProjectPermissionsRequestBody request;
    public TeamsAddOrUpdateProjectPermissionsRequest withRequest(TeamsAddOrUpdateProjectPermissionsRequestBody request) {
        this.request = request;
        return this;
    }
}