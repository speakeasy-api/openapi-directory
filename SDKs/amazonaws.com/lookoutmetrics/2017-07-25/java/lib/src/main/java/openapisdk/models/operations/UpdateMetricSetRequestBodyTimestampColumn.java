package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateMetricSetRequestBodyTimestampColumn
 * Contains information about the column used to track time in a source data file.
**/
public class UpdateMetricSetRequestBodyTimestampColumn {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ColumnFormat")
    public String columnFormat;
    public UpdateMetricSetRequestBodyTimestampColumn withColumnFormat(String columnFormat) {
        this.columnFormat = columnFormat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ColumnName")
    public String columnName;
    public UpdateMetricSetRequestBodyTimestampColumn withColumnName(String columnName) {
        this.columnName = columnName;
        return this;
    }
}