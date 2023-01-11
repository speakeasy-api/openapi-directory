package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateExportPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=exportId")
    public String exportId;
    public UpdateExportPathParams withExportId(String exportId) {
        this.exportId = exportId;
        return this;
    }
}