package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRegisterInstanceEventNotificationAttributesRequest {
    public PostRegisterInstanceEventNotificationAttributesQueryParams queryParams;
    public PostRegisterInstanceEventNotificationAttributesRequest withQueryParams(PostRegisterInstanceEventNotificationAttributesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostRegisterInstanceEventNotificationAttributesHeaders headers;
    public PostRegisterInstanceEventNotificationAttributesRequest withHeaders(PostRegisterInstanceEventNotificationAttributesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostRegisterInstanceEventNotificationAttributesRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}