package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetMarketplaceAccountsSynchronizationQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=storeId")
    public String storeId;
    public GetMarketplaceAccountsSynchronizationQueryParams withStoreId(String storeId) {
        this.storeId = storeId;
        return this;
    }
}