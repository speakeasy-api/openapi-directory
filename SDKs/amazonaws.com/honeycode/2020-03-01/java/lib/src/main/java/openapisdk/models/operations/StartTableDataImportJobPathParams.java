package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StartTableDataImportJobPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=tableId")
    public String tableId;
    public StartTableDataImportJobPathParams withTableId(String tableId) {
        this.tableId = tableId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=workbookId")
    public String workbookId;
    public StartTableDataImportJobPathParams withWorkbookId(String workbookId) {
        this.workbookId = workbookId;
        return this;
    }
}