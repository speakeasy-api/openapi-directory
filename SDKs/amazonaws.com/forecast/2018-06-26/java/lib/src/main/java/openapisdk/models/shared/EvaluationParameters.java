package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EvaluationParameters
 * Parameters that define how to split a dataset into training data and testing data, and the number of iterations to perform. These parameters are specified in the predefined algorithms but you can override them in the <a>CreatePredictor</a> request.
**/
public class EvaluationParameters {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BackTestWindowOffset")
    public Long backTestWindowOffset;
    public EvaluationParameters withBackTestWindowOffset(Long backTestWindowOffset) {
        this.backTestWindowOffset = backTestWindowOffset;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NumberOfBacktestWindows")
    public Long numberOfBacktestWindows;
    public EvaluationParameters withNumberOfBacktestWindows(Long numberOfBacktestWindows) {
        this.numberOfBacktestWindows = numberOfBacktestWindows;
        return this;
    }
}