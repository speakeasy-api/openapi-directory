package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteForecastExportJobRequest {
    public DeleteForecastExportJobHeaders headers;
    public DeleteForecastExportJobRequest withHeaders(DeleteForecastExportJobHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteForecastExportJobRequest request;
    public DeleteForecastExportJobRequest withRequest(openapisdk.models.shared.DeleteForecastExportJobRequest request) {
        this.request = request;
        return this;
    }
}