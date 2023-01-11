package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AutoConfigureAutoImportIntervalPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=storeId")
    public String storeId;
    public AutoConfigureAutoImportIntervalPathParams withStoreId(String storeId) {
        this.storeId = storeId;
        return this;
    }
}