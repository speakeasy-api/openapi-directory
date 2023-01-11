package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetStoreTrackedExternalOrdersPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=storeId")
    public String storeId;
    public GetStoreTrackedExternalOrdersPathParams withStoreId(String storeId) {
        this.storeId = storeId;
        return this;
    }
}