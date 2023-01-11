package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BatchCreateTableRowsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=tableId")
    public String tableId;
    public BatchCreateTableRowsPathParams withTableId(String tableId) {
        this.tableId = tableId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=workbookId")
    public String workbookId;
    public BatchCreateTableRowsPathParams withWorkbookId(String workbookId) {
        this.workbookId = workbookId;
        return this;
    }
}