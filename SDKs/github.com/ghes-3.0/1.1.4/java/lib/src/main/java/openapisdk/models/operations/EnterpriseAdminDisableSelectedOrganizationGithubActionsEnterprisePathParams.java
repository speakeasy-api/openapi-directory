package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EnterpriseAdminDisableSelectedOrganizationGithubActionsEnterprisePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=enterprise")
    public String enterprise;
    public EnterpriseAdminDisableSelectedOrganizationGithubActionsEnterprisePathParams withEnterprise(String enterprise) {
        this.enterprise = enterprise;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=org_id")
    public Long orgId;
    public EnterpriseAdminDisableSelectedOrganizationGithubActionsEnterprisePathParams withOrgId(Long orgId) {
        this.orgId = orgId;
        return this;
    }
}