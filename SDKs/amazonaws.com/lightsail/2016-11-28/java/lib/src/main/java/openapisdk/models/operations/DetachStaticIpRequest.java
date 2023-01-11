package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DetachStaticIpRequest {
    public DetachStaticIpHeaders headers;
    public DetachStaticIpRequest withHeaders(DetachStaticIpHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DetachStaticIpRequest request;
    public DetachStaticIpRequest withRequest(openapisdk.models.shared.DetachStaticIpRequest request) {
        this.request = request;
        return this;
    }
}