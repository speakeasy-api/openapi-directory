package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SaveStoreAlertsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=storeId")
    public String storeId;
    public SaveStoreAlertsPathParams withStoreId(String storeId) {
        this.storeId = storeId;
        return this;
    }
}