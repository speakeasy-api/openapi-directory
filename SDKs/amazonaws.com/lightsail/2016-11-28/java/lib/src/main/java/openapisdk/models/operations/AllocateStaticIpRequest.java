package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AllocateStaticIpRequest {
    public AllocateStaticIpHeaders headers;
    public AllocateStaticIpRequest withHeaders(AllocateStaticIpHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AllocateStaticIpRequest request;
    public AllocateStaticIpRequest withRequest(openapisdk.models.shared.AllocateStaticIpRequest request) {
        this.request = request;
        return this;
    }
}