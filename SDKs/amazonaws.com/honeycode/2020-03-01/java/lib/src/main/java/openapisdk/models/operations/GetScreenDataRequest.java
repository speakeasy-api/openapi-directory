package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetScreenDataRequest {
    public GetScreenDataHeaders headers;
    public GetScreenDataRequest withHeaders(GetScreenDataHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public GetScreenDataRequestBody request;
    public GetScreenDataRequest withRequest(GetScreenDataRequestBody request) {
        this.request = request;
        return this;
    }
}