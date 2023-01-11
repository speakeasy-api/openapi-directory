package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetInstanceMetricDataRequest {
    public GetInstanceMetricDataHeaders headers;
    public GetInstanceMetricDataRequest withHeaders(GetInstanceMetricDataHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetInstanceMetricDataRequest request;
    public GetInstanceMetricDataRequest withRequest(openapisdk.models.shared.GetInstanceMetricDataRequest request) {
        this.request = request;
        return this;
    }
}