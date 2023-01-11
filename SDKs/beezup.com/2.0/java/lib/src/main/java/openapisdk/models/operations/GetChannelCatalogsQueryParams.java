package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetChannelCatalogsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=storeId")
    public String storeId;
    public GetChannelCatalogsQueryParams withStoreId(String storeId) {
        this.storeId = storeId;
        return this;
    }
}