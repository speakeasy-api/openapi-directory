package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MergeShardsRequest {
    public MergeShardsHeaders headers;
    public MergeShardsRequest withHeaders(MergeShardsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.MergeShardsInput request;
    public MergeShardsRequest withRequest(openapisdk.models.shared.MergeShardsInput request) {
        this.request = request;
        return this;
    }
}