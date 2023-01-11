package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeForecastRequest {
    public DescribeForecastHeaders headers;
    public DescribeForecastRequest withHeaders(DescribeForecastHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeForecastRequest request;
    public DescribeForecastRequest withRequest(openapisdk.models.shared.DescribeForecastRequest request) {
        this.request = request;
        return this;
    }
}