package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AppsGetSubscriptionPlanForAccountPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=account_id")
    public Long accountId;
    public AppsGetSubscriptionPlanForAccountPathParams withAccountId(Long accountId) {
        this.accountId = accountId;
        return this;
    }
}