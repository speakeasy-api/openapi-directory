package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutMetricPolicyRequest {
    public PutMetricPolicyHeaders headers;
    public PutMetricPolicyRequest withHeaders(PutMetricPolicyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PutMetricPolicyInput request;
    public PutMetricPolicyRequest withRequest(openapisdk.models.shared.PutMetricPolicyInput request) {
        this.request = request;
        return this;
    }
}