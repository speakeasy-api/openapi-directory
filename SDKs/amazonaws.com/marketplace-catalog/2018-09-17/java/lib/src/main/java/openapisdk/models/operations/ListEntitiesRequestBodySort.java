package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListEntitiesRequestBodySort
 * An object that contains two attributes, <code>SortBy</code> and <code>SortOrder</code>.
**/
public class ListEntitiesRequestBodySort {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SortBy")
    public String sortBy;
    public ListEntitiesRequestBodySort withSortBy(String sortBy) {
        this.sortBy = sortBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SortOrder")
    public openapisdk.models.shared.SortOrderEnum sortOrder;
    public ListEntitiesRequestBodySort withSortOrder(openapisdk.models.shared.SortOrderEnum sortOrder) {
        this.sortOrder = sortOrder;
        return this;
    }
}