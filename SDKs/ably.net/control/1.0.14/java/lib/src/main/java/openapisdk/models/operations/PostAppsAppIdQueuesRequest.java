package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAppsAppIdQueuesRequest {
    public PostAppsAppIdQueuesPathParams pathParams;
    public PostAppsAppIdQueuesRequest withPathParams(PostAppsAppIdQueuesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Queue request;
    public PostAppsAppIdQueuesRequest withRequest(openapisdk.models.shared.Queue request) {
        this.request = request;
        return this;
    }
    public PostAppsAppIdQueuesSecurity security;
    public PostAppsAppIdQueuesRequest withSecurity(PostAppsAppIdQueuesSecurity security) {
        this.security = security;
        return this;
    }
}