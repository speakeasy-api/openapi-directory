package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class HarvestAllQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=storeId")
    public String storeId;
    public HarvestAllQueryParams withStoreId(String storeId) {
        this.storeId = storeId;
        return this;
    }
}