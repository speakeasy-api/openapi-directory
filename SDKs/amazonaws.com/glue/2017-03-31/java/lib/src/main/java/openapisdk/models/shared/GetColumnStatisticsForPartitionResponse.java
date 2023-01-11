package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetColumnStatisticsForPartitionResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ColumnStatisticsList")
    public ColumnStatistics[] columnStatisticsList;
    public GetColumnStatisticsForPartitionResponse withColumnStatisticsList(ColumnStatistics[] columnStatisticsList) {
        this.columnStatisticsList = columnStatisticsList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Errors")
    public ColumnError[] errors;
    public GetColumnStatisticsForPartitionResponse withErrors(ColumnError[] errors) {
        this.errors = errors;
        return this;
    }
}