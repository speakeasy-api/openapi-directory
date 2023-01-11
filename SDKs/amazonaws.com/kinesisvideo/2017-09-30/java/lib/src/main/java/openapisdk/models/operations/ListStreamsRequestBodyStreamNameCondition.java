package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListStreamsRequestBodyStreamNameCondition
 * Specifies the condition that streams must satisfy to be returned when you list streams (see the <code>ListStreams</code> API). A condition has a comparison operation and a value. Currently, you can specify only the <code>BEGINS_WITH</code> operator, which finds streams whose names start with a given prefix. 
**/
public class ListStreamsRequestBodyStreamNameCondition {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ComparisonOperator")
    public openapisdk.models.shared.ComparisonOperatorEnum comparisonOperator;
    public ListStreamsRequestBodyStreamNameCondition withComparisonOperator(openapisdk.models.shared.ComparisonOperatorEnum comparisonOperator) {
        this.comparisonOperator = comparisonOperator;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ComparisonValue")
    public String comparisonValue;
    public ListStreamsRequestBodyStreamNameCondition withComparisonValue(String comparisonValue) {
        this.comparisonValue = comparisonValue;
        return this;
    }
}