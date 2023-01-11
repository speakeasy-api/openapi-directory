package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateRulePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=storeId")
    public String storeId;
    public CreateRulePathParams withStoreId(String storeId) {
        this.storeId = storeId;
        return this;
    }
}