package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutTraceSegmentsRequest {
    public PutTraceSegmentsHeaders headers;
    public PutTraceSegmentsRequest withHeaders(PutTraceSegmentsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PutTraceSegmentsRequestBody request;
    public PutTraceSegmentsRequest withRequest(PutTraceSegmentsRequestBody request) {
        this.request = request;
        return this;
    }
}