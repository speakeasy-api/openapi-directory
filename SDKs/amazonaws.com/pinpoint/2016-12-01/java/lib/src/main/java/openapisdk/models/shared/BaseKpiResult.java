package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * BaseKpiResult
 * Provides the results of a query that retrieved the data for a standard metric that applies to an application, campaign, or journey.
**/
public class BaseKpiResult {
    @JsonProperty("Rows")
    public ResultRow[] rows;
    public BaseKpiResult withRows(ResultRow[] rows) {
        this.rows = rows;
        return this;
    }
}