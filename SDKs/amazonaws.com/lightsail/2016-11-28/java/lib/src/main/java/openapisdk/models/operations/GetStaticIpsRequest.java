package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetStaticIpsRequest {
    public GetStaticIpsHeaders headers;
    public GetStaticIpsRequest withHeaders(GetStaticIpsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetStaticIpsRequest request;
    public GetStaticIpsRequest withRequest(openapisdk.models.shared.GetStaticIpsRequest request) {
        this.request = request;
        return this;
    }
}