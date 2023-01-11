package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TeamsCreateDiscussionInOrgRequest {
    public TeamsCreateDiscussionInOrgPathParams pathParams;
    public TeamsCreateDiscussionInOrgRequest withPathParams(TeamsCreateDiscussionInOrgPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public TeamsCreateDiscussionInOrgRequestBody request;
    public TeamsCreateDiscussionInOrgRequest withRequest(TeamsCreateDiscussionInOrgRequestBody request) {
        this.request = request;
        return this;
    }
}