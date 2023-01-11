package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EnterpriseAdminProvisionAndInviteEnterpriseGroupPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=enterprise")
    public String enterprise;
    public EnterpriseAdminProvisionAndInviteEnterpriseGroupPathParams withEnterprise(String enterprise) {
        this.enterprise = enterprise;
        return this;
    }
}