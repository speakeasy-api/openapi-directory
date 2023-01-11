package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EnterpriseAdminListRunnerApplicationsForEnterprisePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=enterprise")
    public String enterprise;
    public EnterpriseAdminListRunnerApplicationsForEnterprisePathParams withEnterprise(String enterprise) {
        this.enterprise = enterprise;
        return this;
    }
}