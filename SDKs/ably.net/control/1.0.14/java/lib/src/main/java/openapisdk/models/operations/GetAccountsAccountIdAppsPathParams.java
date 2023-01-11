package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAccountsAccountIdAppsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=account_id")
    public String accountId;
    public GetAccountsAccountIdAppsPathParams withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
}