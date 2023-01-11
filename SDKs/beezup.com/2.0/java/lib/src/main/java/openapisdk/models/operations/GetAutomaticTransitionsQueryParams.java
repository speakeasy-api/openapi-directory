package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAutomaticTransitionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=storeId")
    public String storeId;
    public GetAutomaticTransitionsQueryParams withStoreId(String storeId) {
        this.storeId = storeId;
        return this;
    }
}