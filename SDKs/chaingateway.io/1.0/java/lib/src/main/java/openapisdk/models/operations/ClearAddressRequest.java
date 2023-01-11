package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ClearAddressRequest {
    public ClearAddressHeaders headers;
    public ClearAddressRequest withHeaders(ClearAddressHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ClearAddressRequest request;
    public ClearAddressRequest withRequest(openapisdk.models.shared.ClearAddressRequest request) {
        this.request = request;
        return this;
    }
}