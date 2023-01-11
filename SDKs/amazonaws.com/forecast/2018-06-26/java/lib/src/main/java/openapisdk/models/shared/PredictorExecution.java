package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PredictorExecution
 * The algorithm used to perform a backtest and the status of those tests.
**/
public class PredictorExecution {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AlgorithmArn")
    public String algorithmArn;
    public PredictorExecution withAlgorithmArn(String algorithmArn) {
        this.algorithmArn = algorithmArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TestWindows")
    public TestWindowSummary[] testWindows;
    public PredictorExecution withTestWindows(TestWindowSummary[] testWindows) {
        this.testWindows = testWindows;
        return this;
    }
}