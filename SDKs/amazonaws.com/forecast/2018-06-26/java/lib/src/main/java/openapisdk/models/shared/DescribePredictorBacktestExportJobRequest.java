package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribePredictorBacktestExportJobRequest {
    @JsonProperty("PredictorBacktestExportJobArn")
    public String predictorBacktestExportJobArn;
    public DescribePredictorBacktestExportJobRequest withPredictorBacktestExportJobArn(String predictorBacktestExportJobArn) {
        this.predictorBacktestExportJobArn = predictorBacktestExportJobArn;
        return this;
    }
}