package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateStorePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=storeId")
    public String storeId;
    public UpdateStorePathParams withStoreId(String storeId) {
        this.storeId = storeId;
        return this;
    }
}