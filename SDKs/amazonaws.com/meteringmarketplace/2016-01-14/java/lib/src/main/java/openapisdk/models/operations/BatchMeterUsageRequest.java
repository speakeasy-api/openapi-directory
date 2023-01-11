package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BatchMeterUsageRequest {
    public BatchMeterUsageHeaders headers;
    public BatchMeterUsageRequest withHeaders(BatchMeterUsageHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BatchMeterUsageRequest request;
    public BatchMeterUsageRequest withRequest(openapisdk.models.shared.BatchMeterUsageRequest request) {
        this.request = request;
        return this;
    }
}