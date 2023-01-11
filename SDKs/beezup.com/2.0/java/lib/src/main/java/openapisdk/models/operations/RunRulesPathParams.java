package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RunRulesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=storeId")
    public String storeId;
    public RunRulesPathParams withStoreId(String storeId) {
        this.storeId = storeId;
        return this;
    }
}