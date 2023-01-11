package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MoveUpRulePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ruleId")
    public String ruleId;
    public MoveUpRulePathParams withRuleId(String ruleId) {
        this.ruleId = ruleId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=storeId")
    public String storeId;
    public MoveUpRulePathParams withStoreId(String storeId) {
        this.storeId = storeId;
        return this;
    }
}