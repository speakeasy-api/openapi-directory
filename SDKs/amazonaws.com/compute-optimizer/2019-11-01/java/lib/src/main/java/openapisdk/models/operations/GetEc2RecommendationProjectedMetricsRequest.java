package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEc2RecommendationProjectedMetricsRequest {
    public GetEc2RecommendationProjectedMetricsHeaders headers;
    public GetEc2RecommendationProjectedMetricsRequest withHeaders(GetEc2RecommendationProjectedMetricsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetEc2RecommendationProjectedMetricsRequest request;
    public GetEc2RecommendationProjectedMetricsRequest withRequest(openapisdk.models.shared.GetEc2RecommendationProjectedMetricsRequest request) {
        this.request = request;
        return this;
    }
}