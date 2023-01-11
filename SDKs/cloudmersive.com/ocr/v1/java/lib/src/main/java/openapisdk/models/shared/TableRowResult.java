package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TableRowResult
 * One row of data in the resulting table
**/
public class TableRowResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TableRowCellsResult")
    public TableCellResult[] tableRowCellsResult;
    public TableRowResult withTableRowCellsResult(TableCellResult[] tableRowCellsResult) {
        this.tableRowCellsResult = tableRowCellsResult;
        return this;
    }
}