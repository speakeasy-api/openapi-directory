package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetBlockRequest {
    public GetBlockHeaders headers;
    public GetBlockRequest withHeaders(GetBlockHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetBlockRequest request;
    public GetBlockRequest withRequest(openapisdk.models.shared.GetBlockRequest request) {
        this.request = request;
        return this;
    }
}