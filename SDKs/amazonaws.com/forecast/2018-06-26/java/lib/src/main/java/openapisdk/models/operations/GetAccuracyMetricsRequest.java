package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAccuracyMetricsRequest {
    public GetAccuracyMetricsHeaders headers;
    public GetAccuracyMetricsRequest withHeaders(GetAccuracyMetricsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetAccuracyMetricsRequest request;
    public GetAccuracyMetricsRequest withRequest(openapisdk.models.shared.GetAccuracyMetricsRequest request) {
        this.request = request;
        return this;
    }
}