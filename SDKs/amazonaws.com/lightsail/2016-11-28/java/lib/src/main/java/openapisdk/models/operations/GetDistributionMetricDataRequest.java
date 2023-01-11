package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDistributionMetricDataRequest {
    public GetDistributionMetricDataHeaders headers;
    public GetDistributionMetricDataRequest withHeaders(GetDistributionMetricDataHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetDistributionMetricDataRequest request;
    public GetDistributionMetricDataRequest withRequest(openapisdk.models.shared.GetDistributionMetricDataRequest request) {
        this.request = request;
        return this;
    }
}