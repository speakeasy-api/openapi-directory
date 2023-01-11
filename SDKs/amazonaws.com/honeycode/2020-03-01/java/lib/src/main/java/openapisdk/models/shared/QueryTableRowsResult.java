package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class QueryTableRowsResult {
    @JsonProperty("columnIds")
    public String[] columnIds;
    public QueryTableRowsResult withColumnIds(String[] columnIds) {
        this.columnIds = columnIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public QueryTableRowsResult withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonProperty("rows")
    public TableRow[] rows;
    public QueryTableRowsResult withRows(TableRow[] rows) {
        this.rows = rows;
        return this;
    }
    @JsonProperty("workbookCursor")
    public Long workbookCursor;
    public QueryTableRowsResult withWorkbookCursor(Long workbookCursor) {
        this.workbookCursor = workbookCursor;
        return this;
    }
}