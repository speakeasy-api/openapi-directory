package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ResultRow
 * A single row in the ResultSet.
**/
public class ResultRow {
    @JsonProperty("dataItems")
    public DataItem[] dataItems;
    public ResultRow withDataItems(DataItem[] dataItems) {
        this.dataItems = dataItems;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rowId")
    public String rowId;
    public ResultRow withRowId(String rowId) {
        this.rowId = rowId;
        return this;
    }
}