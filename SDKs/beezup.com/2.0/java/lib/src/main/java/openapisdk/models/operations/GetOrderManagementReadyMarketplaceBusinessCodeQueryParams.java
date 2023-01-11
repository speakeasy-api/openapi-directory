package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOrderManagementReadyMarketplaceBusinessCodeQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=storeIds")
    public String[] storeIds;
    public GetOrderManagementReadyMarketplaceBusinessCodeQueryParams withStoreIds(String[] storeIds) {
        this.storeIds = storeIds;
        return this;
    }
}