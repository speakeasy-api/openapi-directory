package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EnterpriseAdminUpdateAttributeForEnterpriseGroupPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=enterprise")
    public String enterprise;
    public EnterpriseAdminUpdateAttributeForEnterpriseGroupPathParams withEnterprise(String enterprise) {
        this.enterprise = enterprise;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=scim_group_id")
    public String scimGroupId;
    public EnterpriseAdminUpdateAttributeForEnterpriseGroupPathParams withScimGroupId(String scimGroupId) {
        this.scimGroupId = scimGroupId;
        return this;
    }
}