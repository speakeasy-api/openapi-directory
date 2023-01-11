package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetStoreTrackedClicksPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=storeId")
    public String storeId;
    public GetStoreTrackedClicksPathParams withStoreId(String storeId) {
        this.storeId = storeId;
        return this;
    }
}