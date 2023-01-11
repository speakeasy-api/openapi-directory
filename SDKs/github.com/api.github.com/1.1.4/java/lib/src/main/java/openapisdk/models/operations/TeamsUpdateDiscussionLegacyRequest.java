package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TeamsUpdateDiscussionLegacyRequest {
    public TeamsUpdateDiscussionLegacyPathParams pathParams;
    public TeamsUpdateDiscussionLegacyRequest withPathParams(TeamsUpdateDiscussionLegacyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public TeamsUpdateDiscussionLegacyRequestBody request;
    public TeamsUpdateDiscussionLegacyRequest withRequest(TeamsUpdateDiscussionLegacyRequestBody request) {
        this.request = request;
        return this;
    }
}