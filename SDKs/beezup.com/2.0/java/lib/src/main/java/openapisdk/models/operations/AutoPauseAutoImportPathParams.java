package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AutoPauseAutoImportPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=storeId")
    public String storeId;
    public AutoPauseAutoImportPathParams withStoreId(String storeId) {
        this.storeId = storeId;
        return this;
    }
}