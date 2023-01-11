package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetFindingStatisticsRequestBodySortCriteria
 * Specifies criteria for sorting the results of a query that retrieves aggregated statistical data about findings.
**/
public class GetFindingStatisticsRequestBodySortCriteria {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attributeName")
    public openapisdk.models.shared.FindingStatisticsSortAttributeNameEnum attributeName;
    public GetFindingStatisticsRequestBodySortCriteria withAttributeName(openapisdk.models.shared.FindingStatisticsSortAttributeNameEnum attributeName) {
        this.attributeName = attributeName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orderBy")
    public openapisdk.models.shared.OrderByEnum orderBy;
    public GetFindingStatisticsRequestBodySortCriteria withOrderBy(openapisdk.models.shared.OrderByEnum orderBy) {
        this.orderBy = orderBy;
        return this;
    }
}