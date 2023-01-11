package openapisdk.models.shared;



/**
 * DefineExpressionResponse
 * The result of a <code>DefineExpression</code> request. Contains the status of the newly-configured expression.
**/
public class DefineExpressionResponse {
    public ExpressionStatus expression;
    public DefineExpressionResponse withExpression(ExpressionStatus expression) {
        this.expression = expression;
        return this;
    }
}