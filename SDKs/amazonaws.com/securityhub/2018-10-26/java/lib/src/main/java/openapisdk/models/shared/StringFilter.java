package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * StringFilter
 * A string filter for querying findings.
**/
public class StringFilter {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Comparison")
    public StringFilterComparisonEnum comparison;
    public StringFilter withComparison(StringFilterComparisonEnum comparison) {
        this.comparison = comparison;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Value")
    public String value;
    public StringFilter withValue(String value) {
        this.value = value;
        return this;
    }
}