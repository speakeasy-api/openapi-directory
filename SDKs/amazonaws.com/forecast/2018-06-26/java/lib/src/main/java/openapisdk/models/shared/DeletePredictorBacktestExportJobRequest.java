package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeletePredictorBacktestExportJobRequest {
    @JsonProperty("PredictorBacktestExportJobArn")
    public String predictorBacktestExportJobArn;
    public DeletePredictorBacktestExportJobRequest withPredictorBacktestExportJobArn(String predictorBacktestExportJobArn) {
        this.predictorBacktestExportJobArn = predictorBacktestExportJobArn;
        return this;
    }
}