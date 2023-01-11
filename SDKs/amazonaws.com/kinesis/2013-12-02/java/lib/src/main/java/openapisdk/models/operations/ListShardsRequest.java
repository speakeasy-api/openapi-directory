package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListShardsRequest {
    public ListShardsHeaders headers;
    public ListShardsRequest withHeaders(ListShardsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListShardsInput request;
    public ListShardsRequest withRequest(openapisdk.models.shared.ListShardsInput request) {
        this.request = request;
        return this;
    }
}