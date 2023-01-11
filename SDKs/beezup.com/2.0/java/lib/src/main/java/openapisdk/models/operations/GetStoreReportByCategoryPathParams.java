package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetStoreReportByCategoryPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=storeId")
    public String storeId;
    public GetStoreReportByCategoryPathParams withStoreId(String storeId) {
        this.storeId = storeId;
        return this;
    }
}