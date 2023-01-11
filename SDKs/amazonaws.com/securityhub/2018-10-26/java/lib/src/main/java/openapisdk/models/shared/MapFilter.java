package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MapFilter
 * A map filter for querying findings. Each map filter provides the field to check, the value to look for, and the comparison operator.
**/
public class MapFilter {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Comparison")
    public MapFilterComparisonEnum comparison;
    public MapFilter withComparison(MapFilterComparisonEnum comparison) {
        this.comparison = comparison;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Key")
    public String key;
    public MapFilter withKey(String key) {
        this.key = key;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Value")
    public String value;
    public MapFilter withValue(String value) {
        this.value = value;
        return this;
    }
}