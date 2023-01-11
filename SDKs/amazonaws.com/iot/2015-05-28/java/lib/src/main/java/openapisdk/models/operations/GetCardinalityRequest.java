package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCardinalityRequest {
    public GetCardinalityHeaders headers;
    public GetCardinalityRequest withHeaders(GetCardinalityHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public GetCardinalityRequestBody request;
    public GetCardinalityRequest withRequest(GetCardinalityRequestBody request) {
        this.request = request;
        return this;
    }
}