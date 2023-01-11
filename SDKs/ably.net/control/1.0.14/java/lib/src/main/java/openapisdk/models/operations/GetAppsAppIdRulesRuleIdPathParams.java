package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAppsAppIdRulesRuleIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=app_id")
    public String appId;
    public GetAppsAppIdRulesRuleIdPathParams withAppId(String appId) {
        this.appId = appId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=rule_id")
    public String ruleId;
    public GetAppsAppIdRulesRuleIdPathParams withRuleId(String ruleId) {
        this.ruleId = ruleId;
        return this;
    }
}