package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteProvisioningTemplatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=templateName")
    public String templateName;
    public DeleteProvisioningTemplatePathParams withTemplateName(String templateName) {
        this.templateName = templateName;
        return this;
    }
}