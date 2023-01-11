package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteImportPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=importId")
    public String importId;
    public DeleteImportPathParams withImportId(String importId) {
        this.importId = importId;
        return this;
    }
}