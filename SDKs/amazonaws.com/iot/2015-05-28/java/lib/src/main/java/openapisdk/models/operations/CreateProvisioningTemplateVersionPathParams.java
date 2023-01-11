package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateProvisioningTemplateVersionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=templateName")
    public String templateName;
    public CreateProvisioningTemplateVersionPathParams withTemplateName(String templateName) {
        this.templateName = templateName;
        return this;
    }
}