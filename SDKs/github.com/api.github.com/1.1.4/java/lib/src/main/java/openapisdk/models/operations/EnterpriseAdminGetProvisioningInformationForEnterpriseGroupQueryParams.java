package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EnterpriseAdminGetProvisioningInformationForEnterpriseGroupQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=excludedAttributes")
    public String excludedAttributes;
    public EnterpriseAdminGetProvisioningInformationForEnterpriseGroupQueryParams withExcludedAttributes(String excludedAttributes) {
        this.excludedAttributes = excludedAttributes;
        return this;
    }
}