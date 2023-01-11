package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetStoreTrackedOrdersPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=storeId")
    public String storeId;
    public GetStoreTrackedOrdersPathParams withStoreId(String storeId) {
        this.storeId = storeId;
        return this;
    }
}