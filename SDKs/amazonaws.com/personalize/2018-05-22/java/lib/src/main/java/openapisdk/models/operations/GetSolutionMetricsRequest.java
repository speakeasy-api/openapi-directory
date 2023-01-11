package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSolutionMetricsRequest {
    public GetSolutionMetricsHeaders headers;
    public GetSolutionMetricsRequest withHeaders(GetSolutionMetricsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetSolutionMetricsRequest request;
    public GetSolutionMetricsRequest withRequest(openapisdk.models.shared.GetSolutionMetricsRequest request) {
        this.request = request;
        return this;
    }
}