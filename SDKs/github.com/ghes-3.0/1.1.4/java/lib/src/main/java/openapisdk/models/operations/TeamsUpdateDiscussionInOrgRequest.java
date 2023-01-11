package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TeamsUpdateDiscussionInOrgRequest {
    public TeamsUpdateDiscussionInOrgPathParams pathParams;
    public TeamsUpdateDiscussionInOrgRequest withPathParams(TeamsUpdateDiscussionInOrgPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public TeamsUpdateDiscussionInOrgRequestBody request;
    public TeamsUpdateDiscussionInOrgRequest withRequest(TeamsUpdateDiscussionInOrgRequestBody request) {
        this.request = request;
        return this;
    }
}