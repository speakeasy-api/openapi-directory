package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteMetricPolicyRequest {
    public DeleteMetricPolicyHeaders headers;
    public DeleteMetricPolicyRequest withHeaders(DeleteMetricPolicyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteMetricPolicyInput request;
    public DeleteMetricPolicyRequest withRequest(openapisdk.models.shared.DeleteMetricPolicyInput request) {
        this.request = request;
        return this;
    }
}