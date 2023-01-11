package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateSmsTemplatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=template-name")
    public String templateName;
    public CreateSmsTemplatePathParams withTemplateName(String templateName) {
        this.templateName = templateName;
        return this;
    }
}