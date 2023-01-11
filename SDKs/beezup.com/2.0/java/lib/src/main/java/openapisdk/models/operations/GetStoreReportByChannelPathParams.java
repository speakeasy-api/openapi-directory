package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetStoreReportByChannelPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=storeId")
    public String storeId;
    public GetStoreReportByChannelPathParams withStoreId(String storeId) {
        this.storeId = storeId;
        return this;
    }
}