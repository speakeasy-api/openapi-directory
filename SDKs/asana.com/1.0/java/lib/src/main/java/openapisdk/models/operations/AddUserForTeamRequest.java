package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddUserForTeamRequest {
    public AddUserForTeamPathParams pathParams;
    public AddUserForTeamRequest withPathParams(AddUserForTeamPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AddUserForTeamQueryParams queryParams;
    public AddUserForTeamRequest withQueryParams(AddUserForTeamQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public AddUserForTeamRequestBody request;
    public AddUserForTeamRequest withRequest(AddUserForTeamRequestBody request) {
        this.request = request;
        return this;
    }
}