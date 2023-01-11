package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EvaluationResult
 * The results of evaluating an algorithm. Returned as part of the <a>GetAccuracyMetrics</a> response.
**/
public class EvaluationResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AlgorithmArn")
    public String algorithmArn;
    public EvaluationResult withAlgorithmArn(String algorithmArn) {
        this.algorithmArn = algorithmArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TestWindows")
    public WindowSummary[] testWindows;
    public EvaluationResult withTestWindows(WindowSummary[] testWindows) {
        this.testWindows = testWindows;
        return this;
    }
}