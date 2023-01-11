package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteStoreSharePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=storeId")
    public String storeId;
    public DeleteStoreSharePathParams withStoreId(String storeId) {
        this.storeId = storeId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public String userId;
    public DeleteStoreSharePathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}