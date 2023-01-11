package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetColumnStatisticsForTableResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ColumnStatisticsList")
    public ColumnStatistics[] columnStatisticsList;
    public GetColumnStatisticsForTableResponse withColumnStatisticsList(ColumnStatistics[] columnStatisticsList) {
        this.columnStatisticsList = columnStatisticsList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Errors")
    public ColumnError[] errors;
    public GetColumnStatisticsForTableResponse withErrors(ColumnError[] errors) {
        this.errors = errors;
        return this;
    }
}