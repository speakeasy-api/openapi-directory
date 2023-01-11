package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateProvisioningClaimPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=templateName")
    public String templateName;
    public CreateProvisioningClaimPathParams withTemplateName(String templateName) {
        this.templateName = templateName;
        return this;
    }
}