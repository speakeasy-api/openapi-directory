package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AnalyticsStoreIndexPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=storeId")
    public String storeId;
    public AnalyticsStoreIndexPathParams withStoreId(String storeId) {
        this.storeId = storeId;
        return this;
    }
}