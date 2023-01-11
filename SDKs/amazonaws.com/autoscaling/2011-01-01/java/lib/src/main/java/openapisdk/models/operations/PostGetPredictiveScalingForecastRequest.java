package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetPredictiveScalingForecastRequest {
    public PostGetPredictiveScalingForecastQueryParams queryParams;
    public PostGetPredictiveScalingForecastRequest withQueryParams(PostGetPredictiveScalingForecastQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostGetPredictiveScalingForecastHeaders headers;
    public PostGetPredictiveScalingForecastRequest withHeaders(PostGetPredictiveScalingForecastHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostGetPredictiveScalingForecastRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}