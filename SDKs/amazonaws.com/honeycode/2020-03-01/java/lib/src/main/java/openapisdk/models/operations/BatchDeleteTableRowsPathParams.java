package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BatchDeleteTableRowsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=tableId")
    public String tableId;
    public BatchDeleteTableRowsPathParams withTableId(String tableId) {
        this.tableId = tableId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=workbookId")
    public String workbookId;
    public BatchDeleteTableRowsPathParams withWorkbookId(String workbookId) {
        this.workbookId = workbookId;
        return this;
    }
}