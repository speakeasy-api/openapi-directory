package openapisdk.models.shared;



/**
 * DeleteExpressionResponse
 * The result of a <code><a>DeleteExpression</a></code> request. Specifies the expression being deleted.
**/
public class DeleteExpressionResponse {
    public ExpressionStatus expression;
    public DeleteExpressionResponse withExpression(ExpressionStatus expression) {
        this.expression = expression;
        return this;
    }
}