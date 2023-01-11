package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TeamsCreateDiscussionLegacyRequest {
    public TeamsCreateDiscussionLegacyPathParams pathParams;
    public TeamsCreateDiscussionLegacyRequest withPathParams(TeamsCreateDiscussionLegacyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public TeamsCreateDiscussionLegacyRequestBody request;
    public TeamsCreateDiscussionLegacyRequest withRequest(TeamsCreateDiscussionLegacyRequestBody request) {
        this.request = request;
        return this;
    }
}