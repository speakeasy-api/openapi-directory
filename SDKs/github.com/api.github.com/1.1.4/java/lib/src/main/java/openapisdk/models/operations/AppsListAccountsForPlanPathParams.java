package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AppsListAccountsForPlanPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=plan_id")
    public Long planId;
    public AppsListAccountsForPlanPathParams withPlanId(Long planId) {
        this.planId = planId;
        return this;
    }
}