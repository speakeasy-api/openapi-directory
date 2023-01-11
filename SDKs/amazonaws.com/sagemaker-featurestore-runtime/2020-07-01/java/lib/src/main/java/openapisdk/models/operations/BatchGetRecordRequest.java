package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BatchGetRecordRequest {
    public BatchGetRecordHeaders headers;
    public BatchGetRecordRequest withHeaders(BatchGetRecordHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public BatchGetRecordRequestBody request;
    public BatchGetRecordRequest withRequest(BatchGetRecordRequestBody request) {
        this.request = request;
        return this;
    }
}