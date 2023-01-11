package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateEvaluationOutput
 * <p> Represents the output of a <code>CreateEvaluation</code> operation, and is an acknowledgement that Amazon ML received the request.</p> <p> <code>CreateEvaluation</code> operation is asynchronous. You can poll for status updates by using the <code>GetEvcaluation</code> operation and checking the <code>Status</code> parameter. </p>
**/
public class CreateEvaluationOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EvaluationId")
    public String evaluationId;
    public CreateEvaluationOutput withEvaluationId(String evaluationId) {
        this.evaluationId = evaluationId;
        return this;
    }
}