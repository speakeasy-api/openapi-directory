package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostSetIdentityHeadersInNotificationsEnabledRequest {
    public PostSetIdentityHeadersInNotificationsEnabledQueryParams queryParams;
    public PostSetIdentityHeadersInNotificationsEnabledRequest withQueryParams(PostSetIdentityHeadersInNotificationsEnabledQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostSetIdentityHeadersInNotificationsEnabledHeaders headers;
    public PostSetIdentityHeadersInNotificationsEnabledRequest withHeaders(PostSetIdentityHeadersInNotificationsEnabledHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostSetIdentityHeadersInNotificationsEnabledRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}