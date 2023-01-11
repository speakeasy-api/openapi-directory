package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReposAddTeamAccessRestrictionsRequest {
    public ReposAddTeamAccessRestrictionsPathParams pathParams;
    public ReposAddTeamAccessRestrictionsRequest withPathParams(ReposAddTeamAccessRestrictionsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public ReposAddTeamAccessRestrictionsRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
}