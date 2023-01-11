package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetStreamKeyRequest {
    public GetStreamKeyHeaders headers;
    public GetStreamKeyRequest withHeaders(GetStreamKeyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public GetStreamKeyRequestBody request;
    public GetStreamKeyRequest withRequest(GetStreamKeyRequestBody request) {
        this.request = request;
        return this;
    }
}