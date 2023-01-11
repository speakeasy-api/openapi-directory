package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAccountsAccountIdAppsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=account_id")
    public String accountId;
    public PostAccountsAccountIdAppsPathParams withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
}