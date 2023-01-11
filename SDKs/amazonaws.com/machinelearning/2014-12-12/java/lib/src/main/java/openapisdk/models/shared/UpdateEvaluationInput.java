package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateEvaluationInput {
    @JsonProperty("EvaluationId")
    public String evaluationId;
    public UpdateEvaluationInput withEvaluationId(String evaluationId) {
        this.evaluationId = evaluationId;
        return this;
    }
    @JsonProperty("EvaluationName")
    public String evaluationName;
    public UpdateEvaluationInput withEvaluationName(String evaluationName) {
        this.evaluationName = evaluationName;
        return this;
    }
}