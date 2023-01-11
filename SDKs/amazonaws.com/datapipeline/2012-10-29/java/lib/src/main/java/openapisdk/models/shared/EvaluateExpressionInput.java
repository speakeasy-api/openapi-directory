package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * EvaluateExpressionInput
 * Contains the parameters for EvaluateExpression.
**/
public class EvaluateExpressionInput {
    @JsonProperty("expression")
    public String expression;
    public EvaluateExpressionInput withExpression(String expression) {
        this.expression = expression;
        return this;
    }
    @JsonProperty("objectId")
    public String objectId;
    public EvaluateExpressionInput withObjectId(String objectId) {
        this.objectId = objectId;
        return this;
    }
    @JsonProperty("pipelineId")
    public String pipelineId;
    public EvaluateExpressionInput withPipelineId(String pipelineId) {
        this.pipelineId = pipelineId;
        return this;
    }
}