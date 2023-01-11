package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IncreaseStreamRetentionPeriodRequest {
    public IncreaseStreamRetentionPeriodHeaders headers;
    public IncreaseStreamRetentionPeriodRequest withHeaders(IncreaseStreamRetentionPeriodHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.IncreaseStreamRetentionPeriodInput request;
    public IncreaseStreamRetentionPeriodRequest withRequest(openapisdk.models.shared.IncreaseStreamRetentionPeriodInput request) {
        this.request = request;
        return this;
    }
}