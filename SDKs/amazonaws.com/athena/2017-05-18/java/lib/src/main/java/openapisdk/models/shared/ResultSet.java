package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ResultSet
 * The metadata and rows that comprise a query result set. The metadata describes the column structure and data types. To return a <code>ResultSet</code> object, use <a>GetQueryResults</a>.
**/
public class ResultSet {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResultSetMetadata")
    public ResultSetMetadata resultSetMetadata;
    public ResultSet withResultSetMetadata(ResultSetMetadata resultSetMetadata) {
        this.resultSetMetadata = resultSetMetadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Rows")
    public Row[] rows;
    public ResultSet withRows(Row[] rows) {
        this.rows = rows;
        return this;
    }
}