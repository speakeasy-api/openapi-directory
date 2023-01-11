package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutRecordBatchRequest {
    public PutRecordBatchHeaders headers;
    public PutRecordBatchRequest withHeaders(PutRecordBatchHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PutRecordBatchInput request;
    public PutRecordBatchRequest withRequest(openapisdk.models.shared.PutRecordBatchInput request) {
        this.request = request;
        return this;
    }
}