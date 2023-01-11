package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetClipRequest {
    public GetClipHeaders headers;
    public GetClipRequest withHeaders(GetClipHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public GetClipRequestBody request;
    public GetClipRequest withRequest(GetClipRequestBody request) {
        this.request = request;
        return this;
    }
}