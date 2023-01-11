package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RemoveUserForTeamRequest {
    public RemoveUserForTeamPathParams pathParams;
    public RemoveUserForTeamRequest withPathParams(RemoveUserForTeamPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RemoveUserForTeamQueryParams queryParams;
    public RemoveUserForTeamRequest withQueryParams(RemoveUserForTeamQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public RemoveUserForTeamRequestBody request;
    public RemoveUserForTeamRequest withRequest(RemoveUserForTeamRequestBody request) {
        this.request = request;
        return this;
    }
}