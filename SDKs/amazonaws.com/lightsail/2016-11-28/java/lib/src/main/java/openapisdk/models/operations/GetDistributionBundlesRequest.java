package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDistributionBundlesRequest {
    public GetDistributionBundlesHeaders headers;
    public GetDistributionBundlesRequest withHeaders(GetDistributionBundlesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public GetDistributionBundlesRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}