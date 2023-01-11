package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateForecastExportJobRequest {
    public CreateForecastExportJobHeaders headers;
    public CreateForecastExportJobRequest withHeaders(CreateForecastExportJobHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateForecastExportJobRequest request;
    public CreateForecastExportJobRequest withRequest(openapisdk.models.shared.CreateForecastExportJobRequest request) {
        this.request = request;
        return this;
    }
}