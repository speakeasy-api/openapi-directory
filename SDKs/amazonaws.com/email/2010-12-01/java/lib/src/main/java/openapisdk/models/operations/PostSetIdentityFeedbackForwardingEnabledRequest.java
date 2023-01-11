package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostSetIdentityFeedbackForwardingEnabledRequest {
    public PostSetIdentityFeedbackForwardingEnabledQueryParams queryParams;
    public PostSetIdentityFeedbackForwardingEnabledRequest withQueryParams(PostSetIdentityFeedbackForwardingEnabledQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostSetIdentityFeedbackForwardingEnabledHeaders headers;
    public PostSetIdentityFeedbackForwardingEnabledRequest withHeaders(PostSetIdentityFeedbackForwardingEnabledHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostSetIdentityFeedbackForwardingEnabledRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}