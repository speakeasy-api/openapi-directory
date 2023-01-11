package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListProvisioningTemplateVersionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=templateName")
    public String templateName;
    public ListProvisioningTemplateVersionsPathParams withTemplateName(String templateName) {
        this.templateName = templateName;
        return this;
    }
}