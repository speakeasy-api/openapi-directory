package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateAddressRequest {
    public CreateAddressHeaders headers;
    public CreateAddressRequest withHeaders(CreateAddressHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateAddressRequest request;
    public CreateAddressRequest withRequest(openapisdk.models.shared.CreateAddressRequest request) {
        this.request = request;
        return this;
    }
}