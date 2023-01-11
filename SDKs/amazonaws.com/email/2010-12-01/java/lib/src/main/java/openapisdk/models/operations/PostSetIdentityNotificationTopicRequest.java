package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostSetIdentityNotificationTopicRequest {
    public PostSetIdentityNotificationTopicQueryParams queryParams;
    public PostSetIdentityNotificationTopicRequest withQueryParams(PostSetIdentityNotificationTopicQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostSetIdentityNotificationTopicHeaders headers;
    public PostSetIdentityNotificationTopicRequest withHeaders(PostSetIdentityNotificationTopicHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostSetIdentityNotificationTopicRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}