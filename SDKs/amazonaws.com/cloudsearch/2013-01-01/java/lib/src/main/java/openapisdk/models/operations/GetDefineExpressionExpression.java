package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

/**
 * GetDefineExpressionExpression
 * A named expression that can be evaluated at search time. Can be used to sort the search results, define other expressions, or return computed information in the search results. 
**/
public class GetDefineExpressionExpression {
    @SpeakeasyMetadata("queryParam:name=ExpressionName")
    public String expressionName;
    public GetDefineExpressionExpression withExpressionName(String expressionName) {
        this.expressionName = expressionName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:name=ExpressionValue")
    public String expressionValue;
    public GetDefineExpressionExpression withExpressionValue(String expressionValue) {
        this.expressionValue = expressionValue;
        return this;
    }
}