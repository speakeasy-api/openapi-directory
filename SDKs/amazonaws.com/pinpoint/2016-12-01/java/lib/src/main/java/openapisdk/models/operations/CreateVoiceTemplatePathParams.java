package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateVoiceTemplatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=template-name")
    public String templateName;
    public CreateVoiceTemplatePathParams withTemplateName(String templateName) {
        this.templateName = templateName;
        return this;
    }
}