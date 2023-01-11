package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Table
 * An object representing the properties of a table in a workbook.
**/
public class Table {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tableId")
    public String tableId;
    public Table withTableId(String tableId) {
        this.tableId = tableId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tableName")
    public String tableName;
    public Table withTableName(String tableName) {
        this.tableName = tableName;
        return this;
    }
}