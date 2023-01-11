package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RetryBuildBatchRequest {
    public RetryBuildBatchHeaders headers;
    public RetryBuildBatchRequest withHeaders(RetryBuildBatchHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RetryBuildBatchInput request;
    public RetryBuildBatchRequest withRequest(openapisdk.models.shared.RetryBuildBatchInput request) {
        this.request = request;
        return this;
    }
}