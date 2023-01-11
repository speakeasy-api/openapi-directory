package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EnterpriseAdminProvisionAndInviteEnterpriseUserPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=enterprise")
    public String enterprise;
    public EnterpriseAdminProvisionAndInviteEnterpriseUserPathParams withEnterprise(String enterprise) {
        this.enterprise = enterprise;
        return this;
    }
}