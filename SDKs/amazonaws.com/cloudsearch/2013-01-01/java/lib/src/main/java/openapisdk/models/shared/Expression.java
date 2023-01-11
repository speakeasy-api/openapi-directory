package openapisdk.models.shared;



/**
 * Expression
 * A named expression that can be evaluated at search time. Can be used to sort the search results, define other expressions, or return computed information in the search results. 
**/
public class Expression {
    public String expressionName;
    public Expression withExpressionName(String expressionName) {
        this.expressionName = expressionName;
        return this;
    }
    public String expressionValue;
    public Expression withExpressionValue(String expressionValue) {
        this.expressionValue = expressionValue;
        return this;
    }
}