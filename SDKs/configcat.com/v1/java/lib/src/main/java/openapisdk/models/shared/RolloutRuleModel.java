package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RolloutRuleModel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comparator")
    public RolloutRuleComparatorEnum comparator;
    public RolloutRuleModel withComparator(RolloutRuleComparatorEnum comparator) {
        this.comparator = comparator;
        return this;
    }
    @JsonProperty("comparisonAttribute")
    public String comparisonAttribute;
    public RolloutRuleModel withComparisonAttribute(String comparisonAttribute) {
        this.comparisonAttribute = comparisonAttribute;
        return this;
    }
    @JsonProperty("comparisonValue")
    public String comparisonValue;
    public RolloutRuleModel withComparisonValue(String comparisonValue) {
        this.comparisonValue = comparisonValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public java.util.Map<String, Object> value;
    public RolloutRuleModel withValue(java.util.Map<String, Object> value) {
        this.value = value;
        return this;
    }
}