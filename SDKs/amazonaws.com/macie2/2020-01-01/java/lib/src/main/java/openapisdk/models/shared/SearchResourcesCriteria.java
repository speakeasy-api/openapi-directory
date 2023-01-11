package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SearchResourcesCriteria
 * Specifies a property- or tag-based filter condition for including or excluding Amazon Web Services resources from the query results.
**/
public class SearchResourcesCriteria {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("simpleCriterion")
    public SearchResourcesSimpleCriterion simpleCriterion;
    public SearchResourcesCriteria withSimpleCriterion(SearchResourcesSimpleCriterion simpleCriterion) {
        this.simpleCriterion = simpleCriterion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tagCriterion")
    public SearchResourcesTagCriterion tagCriterion;
    public SearchResourcesCriteria withTagCriterion(SearchResourcesTagCriterion tagCriterion) {
        this.tagCriterion = tagCriterion;
        return this;
    }
}