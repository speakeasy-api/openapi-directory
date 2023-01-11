package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ResetDistributionCacheRequest {
    public ResetDistributionCacheHeaders headers;
    public ResetDistributionCacheRequest withHeaders(ResetDistributionCacheHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ResetDistributionCacheRequest request;
    public ResetDistributionCacheRequest withRequest(openapisdk.models.shared.ResetDistributionCacheRequest request) {
        this.request = request;
        return this;
    }
}