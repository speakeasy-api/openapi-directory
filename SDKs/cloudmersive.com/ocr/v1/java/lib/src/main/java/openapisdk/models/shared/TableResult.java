package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TableResult
 * The result of reading a table via OCR from a form
**/
public class TableResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TableDefinition")
    public FormTableDefinition tableDefinition;
    public TableResult withTableDefinition(FormTableDefinition tableDefinition) {
        this.tableDefinition = tableDefinition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TableRowsResult")
    public TableRowResult[] tableRowsResult;
    public TableResult withTableRowsResult(TableRowResult[] tableRowsResult) {
        this.tableRowsResult = tableRowsResult;
        return this;
    }
}