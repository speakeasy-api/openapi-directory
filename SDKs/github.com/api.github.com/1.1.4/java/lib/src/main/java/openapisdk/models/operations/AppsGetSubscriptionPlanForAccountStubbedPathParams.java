package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AppsGetSubscriptionPlanForAccountStubbedPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=account_id")
    public Long accountId;
    public AppsGetSubscriptionPlanForAccountStubbedPathParams withAccountId(Long accountId) {
        this.accountId = accountId;
        return this;
    }
}