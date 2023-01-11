package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetLoadBalancerMetricDataRequest {
    public GetLoadBalancerMetricDataHeaders headers;
    public GetLoadBalancerMetricDataRequest withHeaders(GetLoadBalancerMetricDataHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetLoadBalancerMetricDataRequest request;
    public GetLoadBalancerMetricDataRequest withRequest(openapisdk.models.shared.GetLoadBalancerMetricDataRequest request) {
        this.request = request;
        return this;
    }
}