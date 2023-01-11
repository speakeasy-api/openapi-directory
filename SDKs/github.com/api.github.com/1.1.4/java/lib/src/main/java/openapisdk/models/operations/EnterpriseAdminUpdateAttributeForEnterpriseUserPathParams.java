package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EnterpriseAdminUpdateAttributeForEnterpriseUserPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=enterprise")
    public String enterprise;
    public EnterpriseAdminUpdateAttributeForEnterpriseUserPathParams withEnterprise(String enterprise) {
        this.enterprise = enterprise;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=scim_user_id")
    public String scimUserId;
    public EnterpriseAdminUpdateAttributeForEnterpriseUserPathParams withScimUserId(String scimUserId) {
        this.scimUserId = scimUserId;
        return this;
    }
}