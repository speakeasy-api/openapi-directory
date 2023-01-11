package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SetIpAddressTypeRequest {
    public SetIpAddressTypeHeaders headers;
    public SetIpAddressTypeRequest withHeaders(SetIpAddressTypeHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SetIpAddressTypeRequest request;
    public SetIpAddressTypeRequest withRequest(openapisdk.models.shared.SetIpAddressTypeRequest request) {
        this.request = request;
        return this;
    }
}