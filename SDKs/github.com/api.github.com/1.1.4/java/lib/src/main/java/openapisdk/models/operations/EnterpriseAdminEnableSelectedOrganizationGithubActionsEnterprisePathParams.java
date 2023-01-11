package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EnterpriseAdminEnableSelectedOrganizationGithubActionsEnterprisePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=enterprise")
    public String enterprise;
    public EnterpriseAdminEnableSelectedOrganizationGithubActionsEnterprisePathParams withEnterprise(String enterprise) {
        this.enterprise = enterprise;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=org_id")
    public Long orgId;
    public EnterpriseAdminEnableSelectedOrganizationGithubActionsEnterprisePathParams withOrgId(Long orgId) {
        this.orgId = orgId;
        return this;
    }
}