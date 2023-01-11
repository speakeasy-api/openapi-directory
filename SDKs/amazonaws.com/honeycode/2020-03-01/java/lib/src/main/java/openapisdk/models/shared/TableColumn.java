package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TableColumn
 * An object that contains attributes about a single column in a table
**/
public class TableColumn {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("format")
    public FormatEnum format;
    public TableColumn withFormat(FormatEnum format) {
        this.format = format;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tableColumnId")
    public String tableColumnId;
    public TableColumn withTableColumnId(String tableColumnId) {
        this.tableColumnId = tableColumnId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tableColumnName")
    public String tableColumnName;
    public TableColumn withTableColumnName(String tableColumnName) {
        this.tableColumnName = tableColumnName;
        return this;
    }
}