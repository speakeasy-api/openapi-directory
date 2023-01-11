package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ResultRow
 * Provides the results of a query that retrieved the data for a standard metric that applies to an application, campaign, or journey.
**/
public class ResultRow {
    @JsonProperty("GroupedBys")
    public ResultRowValue[] groupedBys;
    public ResultRow withGroupedBys(ResultRowValue[] groupedBys) {
        this.groupedBys = groupedBys;
        return this;
    }
    @JsonProperty("Values")
    public ResultRowValue[] values;
    public ResultRow withValues(ResultRowValue[] values) {
        this.values = values;
        return this;
    }
}