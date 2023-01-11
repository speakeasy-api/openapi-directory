package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListTablesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=workbookId")
    public String workbookId;
    public ListTablesPathParams withWorkbookId(String workbookId) {
        this.workbookId = workbookId;
        return this;
    }
}