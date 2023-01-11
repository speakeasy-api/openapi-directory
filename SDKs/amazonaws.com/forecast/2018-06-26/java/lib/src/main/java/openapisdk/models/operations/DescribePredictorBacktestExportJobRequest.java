package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribePredictorBacktestExportJobRequest {
    public DescribePredictorBacktestExportJobHeaders headers;
    public DescribePredictorBacktestExportJobRequest withHeaders(DescribePredictorBacktestExportJobHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribePredictorBacktestExportJobRequest request;
    public DescribePredictorBacktestExportJobRequest withRequest(openapisdk.models.shared.DescribePredictorBacktestExportJobRequest request) {
        this.request = request;
        return this;
    }
}