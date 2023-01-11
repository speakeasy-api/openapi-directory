package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateEmailTemplatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=template-name")
    public String templateName;
    public CreateEmailTemplatePathParams withTemplateName(String templateName) {
        this.templateName = templateName;
        return this;
    }
}