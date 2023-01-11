package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * UpsertRowData
 *  Data needed to upsert rows in a table as part of a single item in the BatchUpsertTableRows request. 
**/
public class UpsertRowData {
    @JsonProperty("batchItemId")
    public String batchItemId;
    public UpsertRowData withBatchItemId(String batchItemId) {
        this.batchItemId = batchItemId;
        return this;
    }
    @JsonProperty("cellsToUpdate")
    public java.util.Map<String, CellInput> cellsToUpdate;
    public UpsertRowData withCellsToUpdate(java.util.Map<String, CellInput> cellsToUpdate) {
        this.cellsToUpdate = cellsToUpdate;
        return this;
    }
    @JsonProperty("filter")
    public Filter filter;
    public UpsertRowData withFilter(Filter filter) {
        this.filter = filter;
        return this;
    }
}