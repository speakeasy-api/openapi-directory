package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * TableRow
 * An object that contains attributes about a single row in a table
**/
public class TableRow {
    @JsonProperty("cells")
    public Cell[] cells;
    public TableRow withCells(Cell[] cells) {
        this.cells = cells;
        return this;
    }
    @JsonProperty("rowId")
    public String rowId;
    public TableRow withRowId(String rowId) {
        this.rowId = rowId;
        return this;
    }
}