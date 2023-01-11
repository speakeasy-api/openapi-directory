package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NewAddressRequest {
    public NewAddressHeaders headers;
    public NewAddressRequest withHeaders(NewAddressHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.NewAddressRequest request;
    public NewAddressRequest withRequest(openapisdk.models.shared.NewAddressRequest request) {
        this.request = request;
        return this;
    }
}