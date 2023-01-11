package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PrivateInstitutionAccountGroupRolesCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=account_id")
    public Long accountId;
    public PrivateInstitutionAccountGroupRolesCreatePathParams withAccountId(Long accountId) {
        this.accountId = accountId;
        return this;
    }
}