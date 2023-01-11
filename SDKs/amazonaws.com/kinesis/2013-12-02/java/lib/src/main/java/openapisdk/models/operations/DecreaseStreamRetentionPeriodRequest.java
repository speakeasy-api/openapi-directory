package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DecreaseStreamRetentionPeriodRequest {
    public DecreaseStreamRetentionPeriodHeaders headers;
    public DecreaseStreamRetentionPeriodRequest withHeaders(DecreaseStreamRetentionPeriodHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DecreaseStreamRetentionPeriodInput request;
    public DecreaseStreamRetentionPeriodRequest withRequest(openapisdk.models.shared.DecreaseStreamRetentionPeriodInput request) {
        this.request = request;
        return this;
    }
}