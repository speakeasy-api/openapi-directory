package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AutoStartAutoImportPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=storeId")
    public String storeId;
    public AutoStartAutoImportPathParams withStoreId(String storeId) {
        this.storeId = storeId;
        return this;
    }
}