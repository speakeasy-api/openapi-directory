package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StopBuildBatchRequest {
    public StopBuildBatchHeaders headers;
    public StopBuildBatchRequest withHeaders(StopBuildBatchHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StopBuildBatchInput request;
    public StopBuildBatchRequest withRequest(openapisdk.models.shared.StopBuildBatchInput request) {
        this.request = request;
        return this;
    }
}