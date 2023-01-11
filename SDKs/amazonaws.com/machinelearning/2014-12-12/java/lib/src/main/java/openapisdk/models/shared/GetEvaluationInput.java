package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetEvaluationInput {
    @JsonProperty("EvaluationId")
    public String evaluationId;
    public GetEvaluationInput withEvaluationId(String evaluationId) {
        this.evaluationId = evaluationId;
        return this;
    }
}