package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AutoScheduleAutoImportPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=storeId")
    public String storeId;
    public AutoScheduleAutoImportPathParams withStoreId(String storeId) {
        this.storeId = storeId;
        return this;
    }
}