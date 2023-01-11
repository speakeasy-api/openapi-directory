package openapisdk.models.shared;



/**
 * DescribeExpressionsResponse
 * The result of a <code>DescribeExpressions</code> request. Contains the expressions configured for the domain specified in the request.
**/
public class DescribeExpressionsResponse {
    public ExpressionStatus[] expressions;
    public DescribeExpressionsResponse withExpressions(ExpressionStatus[] expressions) {
        this.expressions = expressions;
        return this;
    }
}