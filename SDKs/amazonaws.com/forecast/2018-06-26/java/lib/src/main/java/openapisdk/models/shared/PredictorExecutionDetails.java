package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PredictorExecutionDetails
 * Contains details on the backtests performed to evaluate the accuracy of the predictor. The tests are returned in descending order of accuracy, with the most accurate backtest appearing first. You specify the number of backtests to perform when you call the operation.
**/
public class PredictorExecutionDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PredictorExecutions")
    public PredictorExecution[] predictorExecutions;
    public PredictorExecutionDetails withPredictorExecutions(PredictorExecution[] predictorExecutions) {
        this.predictorExecutions = predictorExecutions;
        return this;
    }
}