package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FailoverShardRequest {
    public FailoverShardHeaders headers;
    public FailoverShardRequest withHeaders(FailoverShardHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.FailoverShardRequest request;
    public FailoverShardRequest withRequest(openapisdk.models.shared.FailoverShardRequest request) {
        this.request = request;
        return this;
    }
}