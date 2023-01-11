package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TableCellResult
 * The recognition result of one cell in one row in a table of a form
**/
public class TableCellResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CellValues")
    public OcrPhotoTextElement[] cellValues;
    public TableCellResult withCellValues(OcrPhotoTextElement[] cellValues) {
        this.cellValues = cellValues;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ColumnID")
    public String columnID;
    public TableCellResult withColumnId(String columnID) {
        this.columnID = columnID;
        return this;
    }
}