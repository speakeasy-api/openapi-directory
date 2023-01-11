package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetStoreReportByDayPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=storeId")
    public String storeId;
    public GetStoreReportByDayPathParams withStoreId(String storeId) {
        this.storeId = storeId;
        return this;
    }
}