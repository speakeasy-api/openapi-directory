package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetHitRequest {
    public GetHitHeaders headers;
    public GetHitRequest withHeaders(GetHitHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetHitRequest request;
    public GetHitRequest withRequest(openapisdk.models.shared.GetHitRequest request) {
        this.request = request;
        return this;
    }
}