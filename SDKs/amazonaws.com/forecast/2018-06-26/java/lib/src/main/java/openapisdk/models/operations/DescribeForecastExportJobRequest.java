package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeForecastExportJobRequest {
    public DescribeForecastExportJobHeaders headers;
    public DescribeForecastExportJobRequest withHeaders(DescribeForecastExportJobHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeForecastExportJobRequest request;
    public DescribeForecastExportJobRequest withRequest(openapisdk.models.shared.DescribeForecastExportJobRequest request) {
        this.request = request;
        return this;
    }
}