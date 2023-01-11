package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PrivateInstitutionAccountGroupRoleDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=account_id")
    public Long accountId;
    public PrivateInstitutionAccountGroupRoleDeletePathParams withAccountId(Long accountId) {
        this.accountId = accountId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=group_id")
    public Long groupId;
    public PrivateInstitutionAccountGroupRoleDeletePathParams withGroupId(Long groupId) {
        this.groupId = groupId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=role_id")
    public Long roleId;
    public PrivateInstitutionAccountGroupRoleDeletePathParams withRoleId(Long roleId) {
        this.roleId = roleId;
        return this;
    }
}