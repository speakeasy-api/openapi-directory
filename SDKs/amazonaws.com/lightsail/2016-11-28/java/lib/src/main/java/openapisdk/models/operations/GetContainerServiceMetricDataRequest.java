package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetContainerServiceMetricDataRequest {
    public GetContainerServiceMetricDataHeaders headers;
    public GetContainerServiceMetricDataRequest withHeaders(GetContainerServiceMetricDataHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetContainerServiceMetricDataRequest request;
    public GetContainerServiceMetricDataRequest withRequest(openapisdk.models.shared.GetContainerServiceMetricDataRequest request) {
        this.request = request;
        return this;
    }
}