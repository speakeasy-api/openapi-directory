package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRulePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ruleId")
    public String ruleId;
    public GetRulePathParams withRuleId(String ruleId) {
        this.ruleId = ruleId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=storeId")
    public String storeId;
    public GetRulePathParams withStoreId(String storeId) {
        this.storeId = storeId;
        return this;
    }
}