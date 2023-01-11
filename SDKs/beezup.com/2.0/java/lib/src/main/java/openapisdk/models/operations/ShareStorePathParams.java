package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ShareStorePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=storeId")
    public String storeId;
    public ShareStorePathParams withStoreId(String storeId) {
        this.storeId = storeId;
        return this;
    }
}