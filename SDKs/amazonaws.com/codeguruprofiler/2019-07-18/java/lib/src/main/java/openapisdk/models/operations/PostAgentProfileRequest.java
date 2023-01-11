package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAgentProfileRequest {
    public PostAgentProfilePathParams pathParams;
    public PostAgentProfileRequest withPathParams(PostAgentProfilePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PostAgentProfileQueryParams queryParams;
    public PostAgentProfileRequest withQueryParams(PostAgentProfileQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostAgentProfileHeaders headers;
    public PostAgentProfileRequest withHeaders(PostAgentProfileHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostAgentProfileRequestBody request;
    public PostAgentProfileRequest withRequest(PostAgentProfileRequestBody request) {
        this.request = request;
        return this;
    }
}