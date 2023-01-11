package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PrivateInstitutionAccountGroupRolesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=account_id")
    public Long accountId;
    public PrivateInstitutionAccountGroupRolesPathParams withAccountId(Long accountId) {
        this.accountId = accountId;
        return this;
    }
}