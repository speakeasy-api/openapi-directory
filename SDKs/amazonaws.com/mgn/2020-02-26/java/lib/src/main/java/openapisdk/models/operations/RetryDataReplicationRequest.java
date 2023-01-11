package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RetryDataReplicationRequest {
    public RetryDataReplicationHeaders headers;
    public RetryDataReplicationRequest withHeaders(RetryDataReplicationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public RetryDataReplicationRequestBody request;
    public RetryDataReplicationRequest withRequest(RetryDataReplicationRequestBody request) {
        this.request = request;
        return this;
    }
}