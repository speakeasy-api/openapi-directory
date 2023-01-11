package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListTablesResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListTablesResult withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonProperty("tables")
    public Table[] tables;
    public ListTablesResult withTables(Table[] tables) {
        this.tables = tables;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("workbookCursor")
    public Long workbookCursor;
    public ListTablesResult withWorkbookCursor(Long workbookCursor) {
        this.workbookCursor = workbookCursor;
        return this;
    }
}