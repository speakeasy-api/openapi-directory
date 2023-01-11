package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEventSelectorsRequest {
    public GetEventSelectorsHeaders headers;
    public GetEventSelectorsRequest withHeaders(GetEventSelectorsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetEventSelectorsRequest request;
    public GetEventSelectorsRequest withRequest(openapisdk.models.shared.GetEventSelectorsRequest request) {
        this.request = request;
        return this;
    }
}