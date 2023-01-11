package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UnsubscribeAddressRequest {
    public UnsubscribeAddressHeaders headers;
    public UnsubscribeAddressRequest withHeaders(UnsubscribeAddressHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UnsubscribeAddressRequest request;
    public UnsubscribeAddressRequest withRequest(openapisdk.models.shared.UnsubscribeAddressRequest request) {
        this.request = request;
        return this;
    }
}