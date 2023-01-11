package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ColumnStatisticsError
 * Encapsulates a <code>ColumnStatistics</code> object that failed and the reason for failure.
**/
public class ColumnStatisticsError {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ColumnStatistics")
    public ColumnStatistics columnStatistics;
    public ColumnStatisticsError withColumnStatistics(ColumnStatistics columnStatistics) {
        this.columnStatistics = columnStatistics;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Error")
    public ErrorDetail error;
    public ColumnStatisticsError withError(ErrorDetail error) {
        this.error = error;
        return this;
    }
}