package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetStorePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=storeId")
    public String storeId;
    public GetStorePathParams withStoreId(String storeId) {
        this.storeId = storeId;
        return this;
    }
}