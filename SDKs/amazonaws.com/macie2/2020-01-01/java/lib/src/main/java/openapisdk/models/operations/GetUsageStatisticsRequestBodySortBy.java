package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetUsageStatisticsRequestBodySortBy
 * Specifies criteria for sorting the results of a query for Amazon Macie account quotas and usage data.
**/
public class GetUsageStatisticsRequestBodySortBy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("key")
    public openapisdk.models.shared.UsageStatisticsSortKeyEnum key;
    public GetUsageStatisticsRequestBodySortBy withKey(openapisdk.models.shared.UsageStatisticsSortKeyEnum key) {
        this.key = key;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orderBy")
    public openapisdk.models.shared.OrderByEnum orderBy;
    public GetUsageStatisticsRequestBodySortBy withOrderBy(openapisdk.models.shared.OrderByEnum orderBy) {
        this.orderBy = orderBy;
        return this;
    }
}