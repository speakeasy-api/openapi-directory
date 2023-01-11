package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterprisePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=enterprise")
    public String enterprise;
    public EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterprisePathParams withEnterprise(String enterprise) {
        this.enterprise = enterprise;
        return this;
    }
}