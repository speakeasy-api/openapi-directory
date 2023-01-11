package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EvaluationResult
 * The evaluation results for the training of a model.
**/
public class EvaluationResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("F1Score")
    public Float f1Score;
    public EvaluationResult withF1Score(Float f1Score) {
        this.f1Score = f1Score;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Summary")
    public Summary summary;
    public EvaluationResult withSummary(Summary summary) {
        this.summary = summary;
        return this;
    }
}