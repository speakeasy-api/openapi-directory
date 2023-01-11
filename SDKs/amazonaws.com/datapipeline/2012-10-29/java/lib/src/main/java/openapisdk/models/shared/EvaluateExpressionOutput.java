package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * EvaluateExpressionOutput
 * Contains the output of EvaluateExpression.
**/
public class EvaluateExpressionOutput {
    @JsonProperty("evaluatedExpression")
    public String evaluatedExpression;
    public EvaluateExpressionOutput withEvaluatedExpression(String evaluatedExpression) {
        this.evaluatedExpression = evaluatedExpression;
        return this;
    }
}