package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SplitShardRequest {
    public SplitShardHeaders headers;
    public SplitShardRequest withHeaders(SplitShardHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SplitShardInput request;
    public SplitShardRequest withRequest(openapisdk.models.shared.SplitShardInput request) {
        this.request = request;
        return this;
    }
}