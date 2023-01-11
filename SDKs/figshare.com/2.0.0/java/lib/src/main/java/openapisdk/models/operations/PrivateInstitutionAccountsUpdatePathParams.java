package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PrivateInstitutionAccountsUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=account_id")
    public Long accountId;
    public PrivateInstitutionAccountsUpdatePathParams withAccountId(Long accountId) {
        this.accountId = accountId;
        return this;
    }
}