package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUpdateAccountSendingEnabledRequest {
    public PostUpdateAccountSendingEnabledQueryParams queryParams;
    public PostUpdateAccountSendingEnabledRequest withQueryParams(PostUpdateAccountSendingEnabledQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostUpdateAccountSendingEnabledHeaders headers;
    public PostUpdateAccountSendingEnabledRequest withHeaders(PostUpdateAccountSendingEnabledHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostUpdateAccountSendingEnabledRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}