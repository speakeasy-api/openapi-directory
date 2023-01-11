package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class HarvestAllV3QueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=storeId")
    public String storeId;
    public HarvestAllV3QueryParams withStoreId(String storeId) {
        this.storeId = storeId;
        return this;
    }
}