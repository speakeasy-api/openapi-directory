package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutAccountSendingAttributesRequest {
    public PutAccountSendingAttributesHeaders headers;
    public PutAccountSendingAttributesRequest withHeaders(PutAccountSendingAttributesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PutAccountSendingAttributesRequestBody request;
    public PutAccountSendingAttributesRequest withRequest(PutAccountSendingAttributesRequestBody request) {
        this.request = request;
        return this;
    }
}