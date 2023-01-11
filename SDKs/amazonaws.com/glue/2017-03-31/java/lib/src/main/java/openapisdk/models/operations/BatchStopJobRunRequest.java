package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BatchStopJobRunRequest {
    public BatchStopJobRunHeaders headers;
    public BatchStopJobRunRequest withHeaders(BatchStopJobRunHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BatchStopJobRunRequest request;
    public BatchStopJobRunRequest withRequest(openapisdk.models.shared.BatchStopJobRunRequest request) {
        this.request = request;
        return this;
    }
}