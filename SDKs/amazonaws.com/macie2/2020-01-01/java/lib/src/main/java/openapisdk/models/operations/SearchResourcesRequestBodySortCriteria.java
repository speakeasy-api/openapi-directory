package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SearchResourcesRequestBodySortCriteria
 * Specifies criteria for sorting the results of a query for information about Amazon Web Services resources that Amazon Macie monitors and analyzes.
**/
public class SearchResourcesRequestBodySortCriteria {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attributeName")
    public openapisdk.models.shared.SearchResourcesSortAttributeNameEnum attributeName;
    public SearchResourcesRequestBodySortCriteria withAttributeName(openapisdk.models.shared.SearchResourcesSortAttributeNameEnum attributeName) {
        this.attributeName = attributeName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orderBy")
    public openapisdk.models.shared.OrderByEnum orderBy;
    public SearchResourcesRequestBodySortCriteria withOrderBy(openapisdk.models.shared.OrderByEnum orderBy) {
        this.orderBy = orderBy;
        return this;
    }
}