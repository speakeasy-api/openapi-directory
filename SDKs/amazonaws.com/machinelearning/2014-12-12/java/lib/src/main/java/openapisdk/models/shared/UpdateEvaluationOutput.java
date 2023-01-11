package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateEvaluationOutput
 * <p>Represents the output of an <code>UpdateEvaluation</code> operation.</p> <p>You can see the updated content by using the <code>GetEvaluation</code> operation.</p>
**/
public class UpdateEvaluationOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EvaluationId")
    public String evaluationId;
    public UpdateEvaluationOutput withEvaluationId(String evaluationId) {
        this.evaluationId = evaluationId;
        return this;
    }
}