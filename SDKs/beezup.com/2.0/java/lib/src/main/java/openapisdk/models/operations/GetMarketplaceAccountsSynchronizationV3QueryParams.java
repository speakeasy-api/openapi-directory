package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetMarketplaceAccountsSynchronizationV3QueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=storeIds")
    public String[] storeIds;
    public GetMarketplaceAccountsSynchronizationV3QueryParams withStoreIds(String[] storeIds) {
        this.storeIds = storeIds;
        return this;
    }
}