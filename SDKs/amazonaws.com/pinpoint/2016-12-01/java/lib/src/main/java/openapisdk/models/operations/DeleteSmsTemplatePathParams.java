package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteSmsTemplatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=template-name")
    public String templateName;
    public DeleteSmsTemplatePathParams withTemplateName(String templateName) {
        this.templateName = templateName;
        return this;
    }
}