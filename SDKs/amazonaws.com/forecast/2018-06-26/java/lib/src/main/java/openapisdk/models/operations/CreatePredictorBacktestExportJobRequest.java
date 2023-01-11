package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreatePredictorBacktestExportJobRequest {
    public CreatePredictorBacktestExportJobHeaders headers;
    public CreatePredictorBacktestExportJobRequest withHeaders(CreatePredictorBacktestExportJobHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreatePredictorBacktestExportJobRequest request;
    public CreatePredictorBacktestExportJobRequest withRequest(openapisdk.models.shared.CreatePredictorBacktestExportJobRequest request) {
        this.request = request;
        return this;
    }
}