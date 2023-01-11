package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ImportationActivateAutoImportPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=storeId")
    public String storeId;
    public ImportationActivateAutoImportPathParams withStoreId(String storeId) {
        this.storeId = storeId;
        return this;
    }
}