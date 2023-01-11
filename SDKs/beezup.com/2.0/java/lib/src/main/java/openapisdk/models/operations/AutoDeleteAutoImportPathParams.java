package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AutoDeleteAutoImportPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=storeId")
    public String storeId;
    public AutoDeleteAutoImportPathParams withStoreId(String storeId) {
        this.storeId = storeId;
        return this;
    }
}