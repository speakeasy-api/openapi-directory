package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetItemRequest {
    public GetItemHeaders headers;
    public GetItemRequest withHeaders(GetItemHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetItemInput request;
    public GetItemRequest withRequest(openapisdk.models.shared.GetItemInput request) {
        this.request = request;
        return this;
    }
}