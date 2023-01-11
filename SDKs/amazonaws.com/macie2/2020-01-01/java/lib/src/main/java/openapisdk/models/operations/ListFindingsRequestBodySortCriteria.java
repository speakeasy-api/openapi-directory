package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListFindingsRequestBodySortCriteria
 * Specifies criteria for sorting the results of a request for findings.
**/
public class ListFindingsRequestBodySortCriteria {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attributeName")
    public String attributeName;
    public ListFindingsRequestBodySortCriteria withAttributeName(String attributeName) {
        this.attributeName = attributeName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orderBy")
    public openapisdk.models.shared.OrderByEnum orderBy;
    public ListFindingsRequestBodySortCriteria withOrderBy(openapisdk.models.shared.OrderByEnum orderBy) {
        this.orderBy = orderBy;
        return this;
    }
}