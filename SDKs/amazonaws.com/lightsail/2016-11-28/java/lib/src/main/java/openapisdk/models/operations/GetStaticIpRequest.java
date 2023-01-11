package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetStaticIpRequest {
    public GetStaticIpHeaders headers;
    public GetStaticIpRequest withHeaders(GetStaticIpHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetStaticIpRequest request;
    public GetStaticIpRequest withRequest(openapisdk.models.shared.GetStaticIpRequest request) {
        this.request = request;
        return this;
    }
}