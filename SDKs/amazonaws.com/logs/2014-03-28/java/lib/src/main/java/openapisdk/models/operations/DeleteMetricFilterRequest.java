package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteMetricFilterRequest {
    public DeleteMetricFilterHeaders headers;
    public DeleteMetricFilterRequest withHeaders(DeleteMetricFilterHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteMetricFilterRequest request;
    public DeleteMetricFilterRequest withRequest(openapisdk.models.shared.DeleteMetricFilterRequest request) {
        this.request = request;
        return this;
    }
}