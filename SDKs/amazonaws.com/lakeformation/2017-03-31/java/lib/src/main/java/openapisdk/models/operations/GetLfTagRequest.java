package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetLfTagRequest {
    public GetLfTagHeaders headers;
    public GetLfTagRequest withHeaders(GetLfTagHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetLfTagRequest request;
    public GetLfTagRequest withRequest(openapisdk.models.shared.GetLfTagRequest request) {
        this.request = request;
        return this;
    }
}