package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateProvisioningTemplatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=templateName")
    public String templateName;
    public UpdateProvisioningTemplatePathParams withTemplateName(String templateName) {
        this.templateName = templateName;
        return this;
    }
}