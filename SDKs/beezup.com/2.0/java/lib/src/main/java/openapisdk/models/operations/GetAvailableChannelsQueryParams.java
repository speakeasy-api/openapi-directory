package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAvailableChannelsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=storeId")
    public String storeId;
    public GetAvailableChannelsQueryParams withStoreId(String storeId) {
        this.storeId = storeId;
        return this;
    }
}