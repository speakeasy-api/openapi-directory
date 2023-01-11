package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BatchDisableStandardsRequest {
    public BatchDisableStandardsHeaders headers;
    public BatchDisableStandardsRequest withHeaders(BatchDisableStandardsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public BatchDisableStandardsRequestBody request;
    public BatchDisableStandardsRequest withRequest(BatchDisableStandardsRequestBody request) {
        this.request = request;
        return this;
    }
}