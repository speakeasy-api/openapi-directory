package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReposSetTeamAccessRestrictionsRequest {
    public ReposSetTeamAccessRestrictionsPathParams pathParams;
    public ReposSetTeamAccessRestrictionsRequest withPathParams(ReposSetTeamAccessRestrictionsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ReposSetTeamAccessRestrictionsRequestBody request;
    public ReposSetTeamAccessRestrictionsRequest withRequest(ReposSetTeamAccessRestrictionsRequestBody request) {
        this.request = request;
        return this;
    }
}