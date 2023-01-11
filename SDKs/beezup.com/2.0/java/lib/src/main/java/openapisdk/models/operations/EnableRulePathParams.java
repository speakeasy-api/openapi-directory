package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EnableRulePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ruleId")
    public String ruleId;
    public EnableRulePathParams withRuleId(String ruleId) {
        this.ruleId = ruleId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=storeId")
    public String storeId;
    public EnableRulePathParams withStoreId(String storeId) {
        this.storeId = storeId;
        return this;
    }
}