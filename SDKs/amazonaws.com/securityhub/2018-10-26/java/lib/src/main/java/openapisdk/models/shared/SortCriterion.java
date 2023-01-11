package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SortCriterion
 * A collection of finding attributes used to sort findings.
**/
public class SortCriterion {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Field")
    public String field;
    public SortCriterion withField(String field) {
        this.field = field;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SortOrder")
    public SortOrderEnum sortOrder;
    public SortCriterion withSortOrder(SortOrderEnum sortOrder) {
        this.sortOrder = sortOrder;
        return this;
    }
}