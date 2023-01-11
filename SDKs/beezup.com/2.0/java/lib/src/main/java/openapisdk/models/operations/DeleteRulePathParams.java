package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteRulePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ruleId")
    public String ruleId;
    public DeleteRulePathParams withRuleId(String ruleId) {
        this.ruleId = ruleId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=storeId")
    public String storeId;
    public DeleteRulePathParams withStoreId(String storeId) {
        this.storeId = storeId;
        return this;
    }
}