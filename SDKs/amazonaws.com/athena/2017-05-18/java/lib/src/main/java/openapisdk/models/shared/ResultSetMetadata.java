package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ResultSetMetadata
 * The metadata that describes the column structure and data types of a table of query results. To return a <code>ResultSetMetadata</code> object, use <a>GetQueryResults</a>.
**/
public class ResultSetMetadata {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ColumnInfo")
    public ColumnInfo[] columnInfo;
    public ResultSetMetadata withColumnInfo(ColumnInfo[] columnInfo) {
        this.columnInfo = columnInfo;
        return this;
    }
}