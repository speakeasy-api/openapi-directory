package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListClassificationJobsRequestBodySortCriteria
 * Specifies criteria for sorting the results of a request for information about classification jobs.
**/
public class ListClassificationJobsRequestBodySortCriteria {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attributeName")
    public openapisdk.models.shared.ListJobsSortAttributeNameEnum attributeName;
    public ListClassificationJobsRequestBodySortCriteria withAttributeName(openapisdk.models.shared.ListJobsSortAttributeNameEnum attributeName) {
        this.attributeName = attributeName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orderBy")
    public openapisdk.models.shared.OrderByEnum orderBy;
    public ListClassificationJobsRequestBodySortCriteria withOrderBy(openapisdk.models.shared.OrderByEnum orderBy) {
        this.orderBy = orderBy;
        return this;
    }
}