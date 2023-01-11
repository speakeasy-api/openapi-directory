package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetShardIteratorRequest {
    public GetShardIteratorHeaders headers;
    public GetShardIteratorRequest withHeaders(GetShardIteratorHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetShardIteratorInput request;
    public GetShardIteratorRequest withRequest(openapisdk.models.shared.GetShardIteratorInput request) {
        this.request = request;
        return this;
    }
}