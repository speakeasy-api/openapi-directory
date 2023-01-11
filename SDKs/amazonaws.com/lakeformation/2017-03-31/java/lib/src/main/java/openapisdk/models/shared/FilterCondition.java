package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FilterCondition
 * This structure describes the filtering of columns in a table based on a filter condition.
**/
public class FilterCondition {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ComparisonOperator")
    public ComparisonOperatorEnum comparisonOperator;
    public FilterCondition withComparisonOperator(ComparisonOperatorEnum comparisonOperator) {
        this.comparisonOperator = comparisonOperator;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Field")
    public FieldNameStringEnum field;
    public FilterCondition withField(FieldNameStringEnum field) {
        this.field = field;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StringValueList")
    public String[] stringValueList;
    public FilterCondition withStringValueList(String[] stringValueList) {
        this.stringValueList = stringValueList;
        return this;
    }
}