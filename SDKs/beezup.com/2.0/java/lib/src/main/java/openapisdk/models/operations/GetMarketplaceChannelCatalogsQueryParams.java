package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetMarketplaceChannelCatalogsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=storeId")
    public String storeId;
    public GetMarketplaceChannelCatalogsQueryParams withStoreId(String storeId) {
        this.storeId = storeId;
        return this;
    }
}