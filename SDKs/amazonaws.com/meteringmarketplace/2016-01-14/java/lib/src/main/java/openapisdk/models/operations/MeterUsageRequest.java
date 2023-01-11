package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MeterUsageRequest {
    public MeterUsageHeaders headers;
    public MeterUsageRequest withHeaders(MeterUsageHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.MeterUsageRequest request;
    public MeterUsageRequest withRequest(openapisdk.models.shared.MeterUsageRequest request) {
        this.request = request;
        return this;
    }
}