package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AppsListAccountsForPlanStubbedPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=plan_id")
    public Long planId;
    public AppsListAccountsForPlanStubbedPathParams withPlanId(Long planId) {
        this.planId = planId;
        return this;
    }
}