package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CreateRowData
 *  Data needed to create a single row in a table as part of the BatchCreateTableRows request. 
**/
public class CreateRowData {
    @JsonProperty("batchItemId")
    public String batchItemId;
    public CreateRowData withBatchItemId(String batchItemId) {
        this.batchItemId = batchItemId;
        return this;
    }
    @JsonProperty("cellsToCreate")
    public java.util.Map<String, CellInput> cellsToCreate;
    public CreateRowData withCellsToCreate(java.util.Map<String, CellInput> cellsToCreate) {
        this.cellsToCreate = cellsToCreate;
        return this;
    }
}