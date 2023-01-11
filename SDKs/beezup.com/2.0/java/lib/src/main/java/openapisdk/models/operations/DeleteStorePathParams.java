package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteStorePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=storeId")
    public String storeId;
    public DeleteStorePathParams withStoreId(String storeId) {
        this.storeId = storeId;
        return this;
    }
}