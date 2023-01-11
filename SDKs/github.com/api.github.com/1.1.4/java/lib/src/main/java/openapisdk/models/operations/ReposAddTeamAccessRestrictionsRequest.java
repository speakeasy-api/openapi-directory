package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReposAddTeamAccessRestrictionsRequest {
    public ReposAddTeamAccessRestrictionsPathParams pathParams;
    public ReposAddTeamAccessRestrictionsRequest withPathParams(ReposAddTeamAccessRestrictionsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ReposAddTeamAccessRestrictionsRequestBody request;
    public ReposAddTeamAccessRestrictionsRequest withRequest(ReposAddTeamAccessRestrictionsRequestBody request) {
        this.request = request;
        return this;
    }
}