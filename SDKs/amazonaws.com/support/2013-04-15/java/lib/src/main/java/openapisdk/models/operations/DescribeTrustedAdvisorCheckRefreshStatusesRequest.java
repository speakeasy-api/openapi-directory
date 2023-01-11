package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeTrustedAdvisorCheckRefreshStatusesRequest {
    public DescribeTrustedAdvisorCheckRefreshStatusesHeaders headers;
    public DescribeTrustedAdvisorCheckRefreshStatusesRequest withHeaders(DescribeTrustedAdvisorCheckRefreshStatusesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeTrustedAdvisorCheckRefreshStatusesRequest request;
    public DescribeTrustedAdvisorCheckRefreshStatusesRequest withRequest(openapisdk.models.shared.DescribeTrustedAdvisorCheckRefreshStatusesRequest request) {
        this.request = request;
        return this;
    }
}