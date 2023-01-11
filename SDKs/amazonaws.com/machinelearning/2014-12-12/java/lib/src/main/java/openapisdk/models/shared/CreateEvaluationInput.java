package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateEvaluationInput {
    @JsonProperty("EvaluationDataSourceId")
    public String evaluationDataSourceId;
    public CreateEvaluationInput withEvaluationDataSourceId(String evaluationDataSourceId) {
        this.evaluationDataSourceId = evaluationDataSourceId;
        return this;
    }
    @JsonProperty("EvaluationId")
    public String evaluationId;
    public CreateEvaluationInput withEvaluationId(String evaluationId) {
        this.evaluationId = evaluationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EvaluationName")
    public String evaluationName;
    public CreateEvaluationInput withEvaluationName(String evaluationName) {
        this.evaluationName = evaluationName;
        return this;
    }
    @JsonProperty("MLModelId")
    public String mlModelId;
    public CreateEvaluationInput withMlModelId(String mlModelId) {
        this.mlModelId = mlModelId;
        return this;
    }
}