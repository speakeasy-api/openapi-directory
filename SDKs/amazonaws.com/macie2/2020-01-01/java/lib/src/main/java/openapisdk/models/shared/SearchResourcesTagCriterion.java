package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SearchResourcesTagCriterion
 * Specifies a tag-based filter condition that determines which Amazon Web Services resources are included or excluded from the query results.
**/
public class SearchResourcesTagCriterion {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comparator")
    public SearchResourcesComparatorEnum comparator;
    public SearchResourcesTagCriterion withComparator(SearchResourcesComparatorEnum comparator) {
        this.comparator = comparator;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tagValues")
    public SearchResourcesTagCriterionPair[] tagValues;
    public SearchResourcesTagCriterion withTagValues(SearchResourcesTagCriterionPair[] tagValues) {
        this.tagValues = tagValues;
        return this;
    }
}