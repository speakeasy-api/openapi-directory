package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SubscribeAddressRequest {
    public SubscribeAddressHeaders headers;
    public SubscribeAddressRequest withHeaders(SubscribeAddressHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SubscribeAddressRequest request;
    public SubscribeAddressRequest withRequest(openapisdk.models.shared.SubscribeAddressRequest request) {
        this.request = request;
        return this;
    }
}