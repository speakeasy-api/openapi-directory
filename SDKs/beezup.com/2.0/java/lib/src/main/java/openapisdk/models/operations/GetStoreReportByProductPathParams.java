package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetStoreReportByProductPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=storeId")
    public String storeId;
    public GetStoreReportByProductPathParams withStoreId(String storeId) {
        this.storeId = storeId;
        return this;
    }
}