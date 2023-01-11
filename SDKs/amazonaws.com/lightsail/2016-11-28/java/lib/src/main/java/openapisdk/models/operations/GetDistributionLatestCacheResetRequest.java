package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDistributionLatestCacheResetRequest {
    public GetDistributionLatestCacheResetHeaders headers;
    public GetDistributionLatestCacheResetRequest withHeaders(GetDistributionLatestCacheResetHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetDistributionLatestCacheResetRequest request;
    public GetDistributionLatestCacheResetRequest withRequest(openapisdk.models.shared.GetDistributionLatestCacheResetRequest request) {
        this.request = request;
        return this;
    }
}