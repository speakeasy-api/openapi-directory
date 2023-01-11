package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRulesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=storeId")
    public String storeId;
    public GetRulesPathParams withStoreId(String storeId) {
        this.storeId = storeId;
        return this;
    }
}