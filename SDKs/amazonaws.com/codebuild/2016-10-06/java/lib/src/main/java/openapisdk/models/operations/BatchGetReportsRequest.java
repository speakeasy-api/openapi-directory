package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BatchGetReportsRequest {
    public BatchGetReportsHeaders headers;
    public BatchGetReportsRequest withHeaders(BatchGetReportsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BatchGetReportsInput request;
    public BatchGetReportsRequest withRequest(openapisdk.models.shared.BatchGetReportsInput request) {
        this.request = request;
        return this;
    }
}