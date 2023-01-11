package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRulesExecutionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=storeId")
    public String storeId;
    public GetRulesExecutionsPathParams withStoreId(String storeId) {
        this.storeId = storeId;
        return this;
    }
}