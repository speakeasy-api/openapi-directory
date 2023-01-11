package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListTableColumnsResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListTableColumnsResult withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonProperty("tableColumns")
    public TableColumn[] tableColumns;
    public ListTableColumnsResult withTableColumns(TableColumn[] tableColumns) {
        this.tableColumns = tableColumns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("workbookCursor")
    public Long workbookCursor;
    public ListTableColumnsResult withWorkbookCursor(Long workbookCursor) {
        this.workbookCursor = workbookCursor;
        return this;
    }
}