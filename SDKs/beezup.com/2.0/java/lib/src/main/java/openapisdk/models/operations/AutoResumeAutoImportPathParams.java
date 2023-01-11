package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AutoResumeAutoImportPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=storeId")
    public String storeId;
    public AutoResumeAutoImportPathParams withStoreId(String storeId) {
        this.storeId = storeId;
        return this;
    }
}