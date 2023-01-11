package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TimestampColumn
 * Contains information about the column used to track time in a source data file.
**/
public class TimestampColumn {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ColumnFormat")
    public String columnFormat;
    public TimestampColumn withColumnFormat(String columnFormat) {
        this.columnFormat = columnFormat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ColumnName")
    public String columnName;
    public TimestampColumn withColumnName(String columnName) {
        this.columnName = columnName;
        return this;
    }
}