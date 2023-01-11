package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EnterpriseAdminGetGithubActionsPermissionsEnterprisePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=enterprise")
    public String enterprise;
    public EnterpriseAdminGetGithubActionsPermissionsEnterprisePathParams withEnterprise(String enterprise) {
        this.enterprise = enterprise;
        return this;
    }
}