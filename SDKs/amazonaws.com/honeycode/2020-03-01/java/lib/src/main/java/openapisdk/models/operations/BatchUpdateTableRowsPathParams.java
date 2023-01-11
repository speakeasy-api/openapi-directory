package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BatchUpdateTableRowsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=tableId")
    public String tableId;
    public BatchUpdateTableRowsPathParams withTableId(String tableId) {
        this.tableId = tableId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=workbookId")
    public String workbookId;
    public BatchUpdateTableRowsPathParams withWorkbookId(String workbookId) {
        this.workbookId = workbookId;
        return this;
    }
}