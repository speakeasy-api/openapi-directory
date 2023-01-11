package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteExportPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=exportId")
    public String exportId;
    public DeleteExportPathParams withExportId(String exportId) {
        this.exportId = exportId;
        return this;
    }
}