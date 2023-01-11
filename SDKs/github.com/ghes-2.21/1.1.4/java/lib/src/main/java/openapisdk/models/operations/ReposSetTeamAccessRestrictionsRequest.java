package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReposSetTeamAccessRestrictionsRequest {
    public ReposSetTeamAccessRestrictionsPathParams pathParams;
    public ReposSetTeamAccessRestrictionsRequest withPathParams(ReposSetTeamAccessRestrictionsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public ReposSetTeamAccessRestrictionsRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
}