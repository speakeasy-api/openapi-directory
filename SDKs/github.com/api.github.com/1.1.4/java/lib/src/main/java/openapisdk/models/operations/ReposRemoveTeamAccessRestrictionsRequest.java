package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReposRemoveTeamAccessRestrictionsRequest {
    public ReposRemoveTeamAccessRestrictionsPathParams pathParams;
    public ReposRemoveTeamAccessRestrictionsRequest withPathParams(ReposRemoveTeamAccessRestrictionsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ReposRemoveTeamAccessRestrictionsRequestBody request;
    public ReposRemoveTeamAccessRestrictionsRequest withRequest(ReposRemoveTeamAccessRestrictionsRequestBody request) {
        this.request = request;
        return this;
    }
}