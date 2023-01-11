package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostContainersGroupsNameOrIdMaprouteRequest {
    public PostContainersGroupsNameOrIdMaproutePathParams pathParams;
    public PostContainersGroupsNameOrIdMaprouteRequest withPathParams(PostContainersGroupsNameOrIdMaproutePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PostContainersGroupsNameOrIdMaprouteHeaders headers;
    public PostContainersGroupsNameOrIdMaprouteRequest withHeaders(PostContainersGroupsNameOrIdMaprouteHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Route request;
    public PostContainersGroupsNameOrIdMaprouteRequest withRequest(openapisdk.models.shared.Route request) {
        this.request = request;
        return this;
    }
}