package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DeleteEvaluationOutput
 * <p> Represents the output of a <code>DeleteEvaluation</code> operation. The output indicates that Amazon Machine Learning (Amazon ML) received the request.</p> <p>You can use the <code>GetEvaluation</code> operation and check the value of the <code>Status</code> parameter to see whether an <code>Evaluation</code> is marked as <code>DELETED</code>.</p>
**/
public class DeleteEvaluationOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EvaluationId")
    public String evaluationId;
    public DeleteEvaluationOutput withEvaluationId(String evaluationId) {
        this.evaluationId = evaluationId;
        return this;
    }
}