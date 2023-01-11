package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetIdentityNotificationAttributesRequest {
    public PostGetIdentityNotificationAttributesQueryParams queryParams;
    public PostGetIdentityNotificationAttributesRequest withQueryParams(PostGetIdentityNotificationAttributesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostGetIdentityNotificationAttributesHeaders headers;
    public PostGetIdentityNotificationAttributesRequest withHeaders(PostGetIdentityNotificationAttributesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostGetIdentityNotificationAttributesRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}