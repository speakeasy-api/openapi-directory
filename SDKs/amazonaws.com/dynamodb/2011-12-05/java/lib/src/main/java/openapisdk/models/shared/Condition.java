package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Condition {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AttributeValueList")
    public AttributeValue[] attributeValueList;
    public Condition withAttributeValueList(AttributeValue[] attributeValueList) {
        this.attributeValueList = attributeValueList;
        return this;
    }
    @JsonProperty("ComparisonOperator")
    public ComparisonOperatorEnum comparisonOperator;
    public Condition withComparisonOperator(ComparisonOperatorEnum comparisonOperator) {
        this.comparisonOperator = comparisonOperator;
        return this;
    }
}