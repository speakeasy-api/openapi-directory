package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SearchResourcesCriteriaBlock
 * Specifies property- and tag-based conditions that define filter criteria for including or excluding Amazon Web Services resources from the query results.
**/
public class SearchResourcesCriteriaBlock {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("and")
    public SearchResourcesCriteria[] and;
    public SearchResourcesCriteriaBlock withAnd(SearchResourcesCriteria[] and) {
        this.and = and;
        return this;
    }
}