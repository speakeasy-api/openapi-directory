package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateTeamRequest {
    public CreateTeamQueryParams queryParams;
    public CreateTeamRequest withQueryParams(CreateTeamQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateTeamRequestBodyInput request;
    public CreateTeamRequest withRequest(CreateTeamRequestBodyInput request) {
        this.request = request;
        return this;
    }
}