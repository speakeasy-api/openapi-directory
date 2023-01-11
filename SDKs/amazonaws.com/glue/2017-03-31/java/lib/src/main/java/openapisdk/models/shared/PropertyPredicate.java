package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PropertyPredicate
 * Defines a property predicate.
**/
public class PropertyPredicate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Comparator")
    public ComparatorEnum comparator;
    public PropertyPredicate withComparator(ComparatorEnum comparator) {
        this.comparator = comparator;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Key")
    public String key;
    public PropertyPredicate withKey(String key) {
        this.key = key;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Value")
    public String value;
    public PropertyPredicate withValue(String value) {
        this.value = value;
        return this;
    }
}