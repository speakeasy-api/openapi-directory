package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteEvaluationInput {
    @JsonProperty("EvaluationId")
    public String evaluationId;
    public DeleteEvaluationInput withEvaluationId(String evaluationId) {
        this.evaluationId = evaluationId;
        return this;
    }
}