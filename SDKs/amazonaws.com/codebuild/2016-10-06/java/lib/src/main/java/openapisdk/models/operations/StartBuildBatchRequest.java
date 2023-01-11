package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StartBuildBatchRequest {
    public StartBuildBatchHeaders headers;
    public StartBuildBatchRequest withHeaders(StartBuildBatchHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StartBuildBatchInput request;
    public StartBuildBatchRequest withRequest(openapisdk.models.shared.StartBuildBatchInput request) {
        this.request = request;
        return this;
    }
}