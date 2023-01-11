package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateProjectForTeamRequest {
    public CreateProjectForTeamPathParams pathParams;
    public CreateProjectForTeamRequest withPathParams(CreateProjectForTeamPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CreateProjectForTeamQueryParams queryParams;
    public CreateProjectForTeamRequest withQueryParams(CreateProjectForTeamQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateProjectForTeamRequestBodyInput request;
    public CreateProjectForTeamRequest withRequest(CreateProjectForTeamRequestBodyInput request) {
        this.request = request;
        return this;
    }
}