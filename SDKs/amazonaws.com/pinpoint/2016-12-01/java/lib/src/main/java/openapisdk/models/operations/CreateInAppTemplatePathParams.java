package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateInAppTemplatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=template-name")
    public String templateName;
    public CreateInAppTemplatePathParams withTemplateName(String templateName) {
        this.templateName = templateName;
        return this;
    }
}