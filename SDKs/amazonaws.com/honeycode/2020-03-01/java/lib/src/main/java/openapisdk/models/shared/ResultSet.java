package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ResultSet {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("headers")
    public ColumnMetadata[] headers;
    public ResultSet withHeaders(ColumnMetadata[] headers) {
        this.headers = headers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rows")
    public ResultRow[] rows;
    public ResultSet withRows(ResultRow[] rows) {
        this.rows = rows;
        return this;
    }
}