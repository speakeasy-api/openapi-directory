package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddNotificationChannelsRequest {
    public AddNotificationChannelsPathParams pathParams;
    public AddNotificationChannelsRequest withPathParams(AddNotificationChannelsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AddNotificationChannelsHeaders headers;
    public AddNotificationChannelsRequest withHeaders(AddNotificationChannelsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public AddNotificationChannelsRequestBody request;
    public AddNotificationChannelsRequest withRequest(AddNotificationChannelsRequestBody request) {
        this.request = request;
        return this;
    }
}