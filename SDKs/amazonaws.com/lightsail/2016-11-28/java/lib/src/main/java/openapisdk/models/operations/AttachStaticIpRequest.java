package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AttachStaticIpRequest {
    public AttachStaticIpHeaders headers;
    public AttachStaticIpRequest withHeaders(AttachStaticIpHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AttachStaticIpRequest request;
    public AttachStaticIpRequest withRequest(openapisdk.models.shared.AttachStaticIpRequest request) {
        this.request = request;
        return this;
    }
}