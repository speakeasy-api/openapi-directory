package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetResourceMetricsRequest {
    public GetResourceMetricsHeaders headers;
    public GetResourceMetricsRequest withHeaders(GetResourceMetricsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetResourceMetricsRequest request;
    public GetResourceMetricsRequest withRequest(openapisdk.models.shared.GetResourceMetricsRequest request) {
        this.request = request;
        return this;
    }
}