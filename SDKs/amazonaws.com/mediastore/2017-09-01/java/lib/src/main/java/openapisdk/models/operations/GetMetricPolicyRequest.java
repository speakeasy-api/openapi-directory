package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetMetricPolicyRequest {
    public GetMetricPolicyHeaders headers;
    public GetMetricPolicyRequest withHeaders(GetMetricPolicyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetMetricPolicyInput request;
    public GetMetricPolicyRequest withRequest(openapisdk.models.shared.GetMetricPolicyInput request) {
        this.request = request;
        return this;
    }
}