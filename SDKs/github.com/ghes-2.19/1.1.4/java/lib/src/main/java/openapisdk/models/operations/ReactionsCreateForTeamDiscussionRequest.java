package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReactionsCreateForTeamDiscussionRequest {
    public ReactionsCreateForTeamDiscussionPathParams pathParams;
    public ReactionsCreateForTeamDiscussionRequest withPathParams(ReactionsCreateForTeamDiscussionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ReactionsCreateForTeamDiscussionHeaders headers;
    public ReactionsCreateForTeamDiscussionRequest withHeaders(ReactionsCreateForTeamDiscussionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ReactionsCreateForTeamDiscussionRequestBody request;
    public ReactionsCreateForTeamDiscussionRequest withRequest(ReactionsCreateForTeamDiscussionRequestBody request) {
        this.request = request;
        return this;
    }
}