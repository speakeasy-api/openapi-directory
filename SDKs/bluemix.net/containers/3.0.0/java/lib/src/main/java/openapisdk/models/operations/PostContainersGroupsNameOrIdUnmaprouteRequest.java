package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostContainersGroupsNameOrIdUnmaprouteRequest {
    public PostContainersGroupsNameOrIdUnmaproutePathParams pathParams;
    public PostContainersGroupsNameOrIdUnmaprouteRequest withPathParams(PostContainersGroupsNameOrIdUnmaproutePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PostContainersGroupsNameOrIdUnmaprouteHeaders headers;
    public PostContainersGroupsNameOrIdUnmaprouteRequest withHeaders(PostContainersGroupsNameOrIdUnmaprouteHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Route request;
    public PostContainersGroupsNameOrIdUnmaprouteRequest withRequest(openapisdk.models.shared.Route request) {
        this.request = request;
        return this;
    }
}