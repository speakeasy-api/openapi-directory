package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetStoreTrackingStatusPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=storeId")
    public String storeId;
    public GetStoreTrackingStatusPathParams withStoreId(String storeId) {
        this.storeId = storeId;
        return this;
    }
}