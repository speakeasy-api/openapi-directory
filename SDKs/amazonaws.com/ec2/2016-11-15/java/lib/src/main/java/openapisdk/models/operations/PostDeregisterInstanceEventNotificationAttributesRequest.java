package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeregisterInstanceEventNotificationAttributesRequest {
    public PostDeregisterInstanceEventNotificationAttributesQueryParams queryParams;
    public PostDeregisterInstanceEventNotificationAttributesRequest withQueryParams(PostDeregisterInstanceEventNotificationAttributesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeregisterInstanceEventNotificationAttributesHeaders headers;
    public PostDeregisterInstanceEventNotificationAttributesRequest withHeaders(PostDeregisterInstanceEventNotificationAttributesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeregisterInstanceEventNotificationAttributesRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}