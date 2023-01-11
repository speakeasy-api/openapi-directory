package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetStoreAlertsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=storeId")
    public String storeId;
    public GetStoreAlertsPathParams withStoreId(String storeId) {
        this.storeId = storeId;
        return this;
    }
}