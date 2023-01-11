package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetLegacyTrackingChannelCatalogsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=storeId")
    public String storeId;
    public GetLegacyTrackingChannelCatalogsQueryParams withStoreId(String storeId) {
        this.storeId = storeId;
        return this;
    }
}