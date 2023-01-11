package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreatePredictorBacktestExportJobRequest {
    @JsonProperty("Destination")
    public DataDestination destination;
    public CreatePredictorBacktestExportJobRequest withDestination(DataDestination destination) {
        this.destination = destination;
        return this;
    }
    @JsonProperty("PredictorArn")
    public String predictorArn;
    public CreatePredictorBacktestExportJobRequest withPredictorArn(String predictorArn) {
        this.predictorArn = predictorArn;
        return this;
    }
    @JsonProperty("PredictorBacktestExportJobName")
    public String predictorBacktestExportJobName;
    public CreatePredictorBacktestExportJobRequest withPredictorBacktestExportJobName(String predictorBacktestExportJobName) {
        this.predictorBacktestExportJobName = predictorBacktestExportJobName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public Tag[] tags;
    public CreatePredictorBacktestExportJobRequest withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
}