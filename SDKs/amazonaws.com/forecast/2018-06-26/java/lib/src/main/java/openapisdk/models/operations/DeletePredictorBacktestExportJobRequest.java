package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeletePredictorBacktestExportJobRequest {
    public DeletePredictorBacktestExportJobHeaders headers;
    public DeletePredictorBacktestExportJobRequest withHeaders(DeletePredictorBacktestExportJobHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeletePredictorBacktestExportJobRequest request;
    public DeletePredictorBacktestExportJobRequest withRequest(openapisdk.models.shared.DeletePredictorBacktestExportJobRequest request) {
        this.request = request;
        return this;
    }
}