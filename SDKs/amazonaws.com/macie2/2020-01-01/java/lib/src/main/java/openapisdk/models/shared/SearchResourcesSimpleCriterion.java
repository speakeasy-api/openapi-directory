package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SearchResourcesSimpleCriterion
 * Specifies a property-based filter condition that determines which Amazon Web Services resources are included or excluded from the query results.
**/
public class SearchResourcesSimpleCriterion {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comparator")
    public SearchResourcesComparatorEnum comparator;
    public SearchResourcesSimpleCriterion withComparator(SearchResourcesComparatorEnum comparator) {
        this.comparator = comparator;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("key")
    public SearchResourcesSimpleCriterionKeyEnum key;
    public SearchResourcesSimpleCriterion withKey(SearchResourcesSimpleCriterionKeyEnum key) {
        this.key = key;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("values")
    public String[] values;
    public SearchResourcesSimpleCriterion withValues(String[] values) {
        this.values = values;
        return this;
    }
}