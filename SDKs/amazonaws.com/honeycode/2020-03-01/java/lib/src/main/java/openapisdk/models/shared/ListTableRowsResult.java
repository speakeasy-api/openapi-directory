package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListTableRowsResult {
    @JsonProperty("columnIds")
    public String[] columnIds;
    public ListTableRowsResult withColumnIds(String[] columnIds) {
        this.columnIds = columnIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListTableRowsResult withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rowIdsNotFound")
    public String[] rowIdsNotFound;
    public ListTableRowsResult withRowIdsNotFound(String[] rowIdsNotFound) {
        this.rowIdsNotFound = rowIdsNotFound;
        return this;
    }
    @JsonProperty("rows")
    public TableRow[] rows;
    public ListTableRowsResult withRows(TableRow[] rows) {
        this.rows = rows;
        return this;
    }
    @JsonProperty("workbookCursor")
    public Long workbookCursor;
    public ListTableRowsResult withWorkbookCursor(Long workbookCursor) {
        this.workbookCursor = workbookCursor;
        return this;
    }
}