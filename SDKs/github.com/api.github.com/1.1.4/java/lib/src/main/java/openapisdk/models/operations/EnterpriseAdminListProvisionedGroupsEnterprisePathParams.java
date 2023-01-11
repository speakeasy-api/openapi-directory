package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EnterpriseAdminListProvisionedGroupsEnterprisePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=enterprise")
    public String enterprise;
    public EnterpriseAdminListProvisionedGroupsEnterprisePathParams withEnterprise(String enterprise) {
        this.enterprise = enterprise;
        return this;
    }
}